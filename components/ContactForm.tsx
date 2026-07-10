"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    setIsSubmitted(true);
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
          className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
          placeholder="e.g. Sarah Jenkins" 
        />
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
            className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
            placeholder="name@domain.com" 
          />
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
            className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
            placeholder="e.g. +44 7123 456789" 
          />
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
          className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
          placeholder="How can we help you?" 
        />
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
          className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors resize-none" 
          placeholder="Write your message here..."
        ></textarea>
      </div>
      
      <button type="submit" className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-black-pure text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all">
        Send Message
      </button>
    </form>
  );
}
