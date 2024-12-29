"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

// Define interfaces for type safety
interface FormData {
  name: string;
  mobile: string;
  email: string;
  description: string;
}

interface FormStatus {
  type: "success" | "error" | "";
  message: string;
}

const ContactForm: React.FC = () => {
  // State management with TypeScript types
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    description: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Type-safe event handler for input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Type-safe form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("/api/contact", formData);
      setStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: "", mobile: "", email: "", description: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "There was an error submitting your form. Please try again." + error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Base classes for consistent styling
  const inputBaseClass = `
    w-full p-3 bg-white/5 border rounded-lg
    focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]
    transition-all duration-300 ease-in-out
    text-white placeholder:text-gray-300
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9C6FDE] to-[#FF6B9E] p-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Get in Touch
        </h2>
        <p className="text-white/80 text-center mb-8">
          We&apos;d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={inputBaseClass}
              minLength={2}
              maxLength={50}
            />
          </div>

          {/* Mobile Input */}
          <div>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className={inputBaseClass}
              pattern="[0-9]+"
              title="Please enter only numbers"
              minLength={10}
              maxLength={15}
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className={inputBaseClass}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className={`${inputBaseClass} resize-none`}
              minLength={10}
              maxLength={500}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full p-4 rounded-lg font-medium text-white
              bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E]
              hover:opacity-90 transform hover:scale-[0.99]
              transition-all duration-200 ease-in-out
              disabled:opacity-70 disabled:cursor-not-allowed
              flex items-center justify-center gap-2
            `}
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Status Message */}
        {status.message && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              status.type === "success"
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
