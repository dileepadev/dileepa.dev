"use client";
import ItemCards from "@/components/ItemCards";
import textData from "@/constants/textData";
import { useState } from "react";
import { validateForm, sendEmail } from "@/utils/formUtils";
import { FormData } from "@/types/interfaces";
import { ToastComponent } from "@/components/toast";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      await sendEmail(formData);
    } else {
      console.log("Form validation failed. Please check the errors.");
    }
  };

  const placeHolderTheme =
    "p-2 mt-2 rounded-md text-sm font-normal textSecondaryTheme borderTheme transitionButtonTheme cardDarkerTheme";

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-md font-medium textTheme">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name here (e.g. Dileepa Bandara)"
            className={placeHolderTheme}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="pt-1 text-sm errorTheme">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="email" className="text-md font-medium textTheme">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here (e.g. contact@dileepa.dev)"
            className={placeHolderTheme}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="pt-1 text-sm errorTheme">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="subject" className="text-md font-medium textTheme">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject here (e.g. Just saying Hi!)"
            className={placeHolderTheme}
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <p className="pt-1 text-sm errorTheme">{errors.subject}</p>
          )}
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="message" className="text-md font-medium textTheme">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your message here (e.g. Hello Dileepa! I'd like to say Hi!)"
            className={placeHolderTheme}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="pt-1 text-sm errorTheme">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-5 p-2 rounded-md buttonTheme transitionButtonTheme"
        >
          Submit
        </button>
      </form>
      {isSubmitted && <ToastComponent />}
    </div>
  );
};

export default function Connect() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.connectPageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.connectPageData.subtitle}
        </p>
      </div>
      <div className="mt-16 flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:gap-8 sm:gap-8 md:gap-16 lg:gap-24">
        <ContactForm />
        <ItemCards.connectChannelCard
          listItems={textData.connectPageData.connectLinks}
        />
      </div>
    </section>
  );
}
