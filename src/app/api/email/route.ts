import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();
  try {
    console.log(name, email, subject, message);

    const { data, error } = await resend.emails.send({
      text: `Email from ${name} <${email}>`,
      from: "Resend@email.dileepa.dev",
      to: ["contact@dileepa.dev"],
      subject: subject,
      react: EmailTemplate({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
