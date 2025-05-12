import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
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
      from: "resend@email.dileepa.dev",
      to: ["contact@dileepa.dev"],
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
