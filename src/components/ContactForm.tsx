"use client";

import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const { formData, errors, handleChange, handleSubmit, handleBlur } =
    useContactForm();

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 animate-on-scroll"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="textColor block text-sm font-medium mb-2"
          >
            Name <span className="requiredMark">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="textFieldTheme w-full px-4 py-2"
            placeholder="Your name"
            aria-label="Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && (
            <p className="requiredMark text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="textColor block text-sm font-medium mb-2"
          >
            Email <span className="requiredMark">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="textFieldTheme w-full px-4 py-2"
            placeholder="Your email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <p className="requiredMark text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="textColor block text-sm font-medium mb-2"
        >
          Subject <span className="requiredMark">*</span>
        </label>
        <input
          type="text"
          id="subject"
          required
          className="textFieldTheme w-full px-4 py-2"
          placeholder="Subject"
          aria-label="Subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.subject && (
          <p className="requiredMark text-sm mt-1">{errors.subject}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="textColor block text-sm font-medium mb-2"
        >
          Message <span className="requiredMark">*</span>
        </label>
        <textarea
          id="message"
          required
          className="textFieldTheme w-full px-4 py-2 block"
          placeholder="Your message"
          aria-label="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && (
          <p className="requiredMark text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="buttonColor buttonTransition w-full py-3 rounded-md cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
