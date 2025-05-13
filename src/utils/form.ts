import { FormData } from "@/types/FormData";
import toast from "react-hot-toast";

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

export const sendEmail = async (
  formData: FormData,
  toastId: string
): Promise<void> => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    switch (res.status) {
      case 200:
        toast.success("Message sent successfully!", {
          id: toastId,
          duration: 5000,
        });
        break;
      case 400:
        toast.error("Invalid input. Please check your data.", {
          id: toastId,
          duration: 5000,
        });
        break;
      case 429:
        toast.error("Too many requests. Please try again later.", {
          id: toastId,
          duration: 5000,
        });
        break;
      case 500:
        toast.error("Server error. Please try again later.", {
          id: toastId,
          duration: 5000,
        });
        break;
      case 503:
        toast.error("Service unavailable. Please try again later.", {
          id: toastId,
          duration: 5000,
        });
        break;
      case 408:
        toast.error("Request timed out. Please try again.", {
          id: toastId,
          duration: 5000,
        });
        break;
      default:
        toast.error("Failed to send message. Please try again.", {
          id: toastId,
          duration: 5000,
        });
    }
  } catch (error) {
    console.error("Error in sendEmail:", error);
    toast.error("Network error. Please check your connection.", {
      id: toastId,
      duration: 5000,
    });
  }
};
