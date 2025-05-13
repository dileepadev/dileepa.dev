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
    <h3 style={{ marginBottom: 0 }}>Website Contact Form</h3>
    <h4 style={{ marginTop: 0 }}>dileepa.dev</h4>
    <hr />
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
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
