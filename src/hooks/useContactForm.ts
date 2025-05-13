"use client";

import { useState } from "react";
import { FormData } from "@/types/FormData";
import { validateForm, sendEmail } from "@/utils/form";
import toast from "react-hot-toast";

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id } = e.target;
    const fieldName = id as keyof FormData;
    const validationErrors = validateForm(formData);

    const newErrorForField = validationErrors[fieldName];
    const currentErrorForField = errors[fieldName];

    if (newErrorForField !== currentErrorForField) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: newErrorForField,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const toastId = toast.loading("Sending message...");
      try {
        await sendEmail(formData, toastId);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } catch (err) {
        console.error("Error in handleSubmit after sendEmail:", err);
        toast.error("Failed to send message. Please try again later.", {
          id: toastId,
        });
      }
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};
