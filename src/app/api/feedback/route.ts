import { NextRequest, NextResponse } from "next/server";

// Lazy initialization of Resend to avoid build errors when API key is missing
const getResend = async () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const { Resend } = await import("resend");
  return new Resend(process.env.RESEND_API_KEY);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, message, category } = body;

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("[Feedback] RESEND_API_KEY not configured, logging feedback instead");
      console.log("[Feedback]", { email, message, category, timestamp: new Date().toISOString() });
      return NextResponse.json({ success: true, id: "dev-mode" });
    }

    const resend = await getResend();

    // Send feedback email
    const { data, error } = await resend.emails.send({
      from: "SaecretHeaven Feedback <feedback@saecretheaven.com>",
      to: ["einar@black-knight.dev"],
      replyTo: email || undefined,
      subject: `[Feedback] ${category || "General"} - SaecretHeaven App`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">
            New Feedback Received
          </h2>

          <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Category:</strong> ${category || "General"}</p>
            <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${email || "Anonymous"}</p>
            <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}</p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 12px;">
            <h3 style="margin: 0 0 15px 0; color: #374151;">Message:</h3>
            <p style="white-space: pre-wrap; color: #1f2937; line-height: 1.6;">${message}</p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            This feedback was submitted through the SaecretHeaven app.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Feedback] Email send error:", error);
      return NextResponse.json(
        { error: "Failed to send feedback" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("[Feedback] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
