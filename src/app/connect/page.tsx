"use client";
import textData from "@/constants/textData";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type IconType =
  | typeof FaEnvelope
  | typeof FaGithub
  | typeof FaXTwitter
  | typeof FaXTwitter;

function getIconComponent(iconName: String): IconType {
  switch (iconName) {
    case "email":
      return FaEnvelope;
    case "github":
      return FaGithub;
    case "linkedin":
      return FaLinkedin;
    case "xtwitter":
      return FaXTwitter;
    case "youtube":
      return FaYoutube;
    default:
      throw new Error(`Invalid icon name: ${iconName}`);
  }
}

export function ConnectChannelCard() {
  return (
    <div className="grid sm:grid-rows-3 sm:grid-flow-col md:grid-rows-3 md:grid-flow-col lg:grid-rows-3 lg:grid-flow-col gap-4">
      {textData.connectPageData.connectLinks.map((item, index) => {
        const ChannelIcon = getIconComponent(item.icon);
        return (
          <div
            className="p-5 flex flex-col justify-center items-center rounded-xl w-full min-w-[260px] cardDarkerTheme"
            key={index}
          >
            <Link
              href={item.link}
              aria-label={`Link to ${item.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="textButtonTheme transitionButtonTheme"
            >
              <ChannelIcon size={28} />
            </Link>
            <p className="pt-2 text-md font-medium textTheme">{item.title}</p>

            <Link
              href={item.link}
              aria-label={`Link to ${item.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="textButtonTheme transitionButtonTheme"
            >
              <p className="pt-2 text-sm font-normal text-start textSecondaryTheme">
                {item.handler}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function sendEmail(formData: FormData, setIsSubmitted: Function) {
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
        setIsSubmitted(true);
      } else {
        console.log("Failed to send email");
      }
    })
    .catch((err) => {
      console.log("Failed to send email");
      console.log(err);
    });
}

export function SubmissionStatus() {
  return (
    <div className="text-center py-4 lg:px-4">
      <div className="p-2 rounded-xl bg-green-800 bg-opacity-40 backdrop-blur items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">
        <span className="px-2 py-1 mr-3 flex rounded-full bg-green-600 bg-opacity-40 uppercase text-xs font-semibold">
          SUCCESS
        </span>
        <span className="mr-2 text-sm font-normal text-left flex-auto">
          Thanks for contacting me! I&apos;ll get back to you as soon as
          possible. 😊
        </span>
      </div>
    </div>
  );
}

export function ContactForm() {
  const placeHolderTheme =
    "p-2 mt-2 rounded-md text-sm font-normal textSecondaryTheme borderTheme transitionButtonTheme cardDarkerTheme";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: Partial<FormData> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      sendEmail(formData, setIsSubmitted);
    } else {
      console.log("Form validation failed. Please check the errors.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-md font-semibold textTheme">
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
          <label htmlFor="email" className="text-md font-semibold textTheme">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here (e.g. contact@dileepabandara.dev)"
            className={placeHolderTheme}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="pt-1 text-sm errorTheme">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="subject" className="text-md font-semibold textTheme">
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
          <label htmlFor="message" className="text-md font-semibold textTheme">
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
        {isSubmitted && <SubmissionStatus />}
      </form>
    </div>
  );
}

export default function Connect() {
  return (
    <div className="pb-5 md:pb-10">
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.connectPageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.connectPageData.subtitle}
        </p>
      </div>
      <div className="mt-16 flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:gap-8 sm:gap-8 md:gap-16 lg:gap-24">
        <ContactForm />
        <ConnectChannelCard />
      </div>
    </div>
  );
}
