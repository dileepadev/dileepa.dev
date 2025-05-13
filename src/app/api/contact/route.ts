import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

export async function POST(req: NextRequest) {
  const resendAPIKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const resendToEmail = process.env.RESEND_TO_EMAIL;

  if (!resendAPIKey) {
    console.error("Resend API key is not set.");
    return NextResponse.json(
      { message: "Server error: Resend API key is not set." },
      { status: 500 }
    );
  }
  if (!resendFromEmail) {
    console.error("Resend from email is not set.");
    return NextResponse.json(
      { message: "Server error: Resend from email is not set." },
      { status: 500 }
    );
  }
  if (!resendToEmail) {
    console.error("Resend to email is not set.");
    return NextResponse.json(
      { message: "Server error: Resend to email is not set." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    const { data, error: resendError } = await resend.emails.send({
      text: `Email from ${name} <${email}>`,
      from: resendFromEmail,
      to: [resendToEmail],
      subject: subject,
      react: EmailTemplate({
        name,
        email,
        subject,
        message,
      }) as React.ReactElement,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return NextResponse.json(
        { message: "Failed to send email due to a server error." },
        { status: 500 }
      );
    }

    if (!data) {
      console.error("No data returned from Resend");
      return NextResponse.json(
        { message: "Failed to send email: No data returned from provider." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully.", dataId: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
