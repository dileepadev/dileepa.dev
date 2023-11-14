import { FormData } from "@/types/interfaces";

export const validateForm = (formData: FormData): Partial<FormData> => {
  const errors: Partial<FormData> = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (
    !formData.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Valid email is required";
  }

  if (!formData.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};

export const sendEmail = async (formData: FormData): Promise<void> => {
  console.log("Sending email:", formData);
  console.log(JSON.stringify(formData));
  await fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      if (res.status === 200) {
        console.log("Email sent successfully");
      } else {
        console.log("Failed to send email");
      }
    })
    .catch((err) => {
      console.log("Failed to send email");
      console.log(err);
    });
};
