import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    // 📧 Send email to yourself
    const mainEmail = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>", // MUST be verified
      to: [process.env.EMAIL_TO || "prabha.viji@gmail.com"],
      subject,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // ✅ Send auto-response to user
    const autoReply = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>",
      to: [email],
      subject: `Hi ${name}, I received your message!`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting me! I’ve received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
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
