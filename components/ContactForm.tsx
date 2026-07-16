"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { contactSchema, type ContactFormValues } from "../lib/contactSchema";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const nextErrors = Object.fromEntries(
        Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0]])
      ) as FormErrors;

      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setErrors({});
      } else {
        alert(result.message || "Your message could not be sent. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 animate-in fade-in duration-500">
        <div className="w-12 h-12 bg-gold-950/20 border border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-gold-500 w-6 h-6" />
        </div>
        <h4 className="text-base font-display font-bold text-white uppercase tracking-wider mb-2">Message Sent Successfully</h4>
        <p className="text-xs text-gray-400 max-w-sm mx-auto mb-6">
          Thank you for reaching out. A client service manager from TVO Care will get back to you within 24 business hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
          className="font-display font-bold text-xs uppercase tracking-widest bg-gold-500 hover:bg-gold-400 text-black-pure px-6 py-2.5 rounded-full transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
        <input 
          type="text" 
          id="contact-name" 
          name="name" 
          required 
          value={formData.name}
          onChange={handleChange}
          className={`w-full bg-black-pure border rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors ${errors.name ? "border-red-500" : "border-black-border focus:border-gold-500/50"}`} 
          placeholder="e.g. Sarah Jenkins" 
        />
        {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
          <input 
            type="email" 
            id="contact-email" 
            name="email" 
            required 
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-black-pure border rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-black-border focus:border-gold-500/50"}`} 
            placeholder="name@domain.com" 
          />
          {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Phone Number</label>
          <input 
            type="tel" 
            id="contact-phone" 
            name="phone" 
            required 
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-black-pure border rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors ${errors.phone ? "border-red-500" : "border-black-border focus:border-gold-500/50"}`} 
            placeholder="e.g. +44 7123 456789" 
          />
          {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Subject</label>
        <input 
          type="text" 
          id="contact-subject" 
          name="subject" 
          required 
          value={formData.subject}
          onChange={handleChange}
          className={`w-full bg-black-pure border rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors ${errors.subject ? "border-red-500" : "border-black-border focus:border-gold-500/50"}`} 
          placeholder="How can we help you?" 
        />
        {errors.subject && <p className="mt-2 text-xs text-red-400">{errors.subject}</p>}
      </div>
      
      <div>
        <label htmlFor="contact-message" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
        <textarea 
          id="contact-message" 
          name="message" 
          rows={5} 
          required 
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-black-pure border rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500" : "border-black-border focus:border-gold-500/50"}`} 
          placeholder="Write your message here..."
        ></textarea>
        {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
      </div>
      
      <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gold-500 hover:bg-gold-400 disabled:opacity-70 disabled:cursor-not-allowed text-black-pure text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
