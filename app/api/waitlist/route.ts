import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const rateLimitMap = new Map<string, number>();

setInterval(
  () => {
    const cutoff = Date.now() - 60_000;
    for (const [key, ts] of rateLimitMap) {
      if (ts < cutoff) rateLimitMap.delete(key);
    }
  },
  5 * 60 * 1000
);

function getIpKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0].trim();
    if (ip) return ip;
  }

  return `unknown-${Date.now()}-${Math.random()}`;
}

function isRateLimited(key: string): boolean {
  const last = rateLimitMap.get(key);
  const now = Date.now();
  if (last && now - last < 60_000) return true;
  rateLimitMap.set(key, now);
  return false;
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,253}\.[^\s@]{2,}$/;

function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email) && email.length <= 320;
}

function confirmationHtml(year: number): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>You're on the Folly waitlist</title>
</head>
<body style="margin:0;padding:0;background:#F0FDF4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#F0FDF4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:linear-gradient(135deg,#16A34A,#4ADE80);padding:40px;text-align:center;">
              <span style="font-family:Arial,sans-serif;font-size:22px;font-weight:800;color:#ffffff;">Folly Plant Care</span>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 40px 32px;">
              <h1 style="margin:0 0 12px;font-size:28px;font-weight:800;color:#1C1C1E;">
                You're on the list.
              </h1>
              <p style="margin:0 0 20px;font-size:16px;color:#6B7280;line-height:1.6;">
                Thanks for joining the Folly Plant Care waitlist. We're building a calmer way to
                identify plants, spot problems early, and keep care on track.
              </p>
              <p style="margin:0 0 32px;font-size:16px;color:#6B7280;line-height:1.6;">
                We'll send you a personal invite when Folly is ready. No spam, just your invite
                and the occasional update.
              </p>
              <div style="text-align:center;">
                <a href="https://getfolly.app"
                   style="display:inline-block;padding:14px 32px;background:#16A34A;color:#ffffff;font-weight:700;font-size:15px;border-radius:16px;text-decoration:none;">
                  Visit getfolly.app
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #F3F4F6;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9CA3AF;">
                &copy; ${year} Folly Plant Care &middot; Made in London<br/>
                You received this because you signed up at getfolly.app.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request format." }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = (body as Record<string, unknown>)?.email;
  const email = typeof raw === "string" ? raw.trim().toLowerCase() : "";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const ipKey = getIpKey(req);
  if (isRateLimited(ipKey)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  const year = new Date().getFullYear();

  try {
    const [confirmResult] = await Promise.allSettled([
      resend.emails.send({
        from: "Folly Plant Care <hello@getfolly.app>",
        to: [email],
        subject: "You're on the Folly waitlist",
        html: confirmationHtml(year),
      }),
      resend.emails.send({
        from: "Folly Waitlist <hello@getfolly.app>",
        to: ["biscket3000@gmail.com"],
        subject: `New waitlist signup: ${email}`,
        text: `New waitlist signup: ${email}\nTime: ${new Date().toISOString()}`,
      }),
    ]);

    if (confirmResult.status === "rejected") {
      console.error("[waitlist] confirmation email failed:", confirmResult.reason);
      return NextResponse.json(
        { error: "Could not send confirmation email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[waitlist] unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
