import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h2>Website Contact Form</h2>
    <h3>dileepa.dev</h3>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Subject:</strong> {subject}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);

export default EmailTemplate;
