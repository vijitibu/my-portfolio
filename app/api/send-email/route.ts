import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  // ✅ Runtime-safe check
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  const { name, email, subject, message } = await req.json();

  try {
    const mainEmail = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO || "prabha.viji@gmail.com"],
      subject,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    const autoReply = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>",
      to: [email],
      subject: `Hi ${name}, I received your message!`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting me! I’ve received your message and will get back to you shortly.</p>
        <blockquote>${message}</blockquote>
        <p>Warm regards,<br/>Viji</p>
      `,
    });

    return NextResponse.json({ success: true, mainEmail, autoReply });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
