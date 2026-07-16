"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [relationship, setRelationship] = useState("Parent");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states to avoid losing data
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientAge: "",
    postcode: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    careType: "domiciliary",
    urgency: "immediate",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Validate fields in current step before proceeding
    let isValid = true;
    const inputs = document.querySelectorAll<HTMLInputElement>(`.form-step-${step} [required]`);
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add("border-red-500");
        input.addEventListener("input", function removeErr() {
          input.classList.remove("border-red-500");
          input.removeEventListener("input", removeErr);
        });
      }
    });

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "9d982fb0-4394-40e1-9da4-90f3fd68fb7a",
          subject: "New TVO Care Assessment Request",
          relationship,
          name: formData.contactName,
          email: formData.contactEmail,
          phone: formData.contactPhone,
          message: `Recipient: ${formData.recipientName} (Age: ${formData.recipientAge})
Postcode: ${formData.postcode}
Relationship: ${relationship}
Care Type: ${formData.careType}
Urgency: ${formData.urgency}
Notes: ${formData.notes}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        alert("Your assessment request could not be sent. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16 px-6 animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-gold-950/20 border border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-gold-500 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-3">Assessment Request Received</h3>
        <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
          Thank you for requesting an assessment. A care supervisor from TVO Care will contact you within 24 hours to schedule the consultation.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              recipientName: "",
              recipientAge: "",
              postcode: "",
              contactName: "",
              contactEmail: "",
              contactPhone: "",
              careType: "domiciliary",
              urgency: "immediate",
              notes: ""
            });
            setRelationship("Parent");
          }} 
          className="font-display font-bold text-xs uppercase tracking-widest bg-gold-500 hover:bg-gold-400 text-black-pure px-6 py-3 rounded-full transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  const relationships = ["Parent", "Spouse", "Relative", "Friend", "Myself"];

  return (
    <div id="assessment-form-container">
      <div className="flex justify-between items-center mb-8 border-b border-black-border/40 pb-4">
        <span className="text-xs font-display font-bold uppercase tracking-wider text-gold-500">Step {step} of 4</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((s) => (
            <span key={s} className={`w-2 h-2 rounded-full ${s <= step ? 'bg-gold-500' : 'bg-black-muted'}`} />
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Recipient Info */}
        <div className={`form-step-1 space-y-6 ${step === 1 ? "block" : "hidden"}`}>
          <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider border-l-2 border-gold-500 pl-3">Recipient Info</h3>
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Who is this care for?</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {relationships.map((rel) => (
                <button
                  key={rel}
                  type="button"
                  onClick={() => setRelationship(rel)}
                  className={`py-3 px-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                    relationship === rel 
                      ? 'bg-gold-500 text-black-pure border-gold-500/25' 
                      : 'bg-black-rich text-gray-300 border-black-border hover:border-gold-500/30'
                  } ${rel === 'Myself' ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  {rel}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="recipientName" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Recipient Name</label>
              <input 
                required 
                type="text" 
                id="recipientName"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
                placeholder="e.g. John Doe" 
              />
            </div>
            <div>
              <label htmlFor="recipientAge" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Recipient Age</label>
              <input 
                required 
                type="number" 
                id="recipientAge"
                name="recipientAge"
                value={formData.recipientAge}
                onChange={handleChange}
                className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
                placeholder="e.g. 72" 
              />
            </div>
          </div>
          <div>
            <label htmlFor="postcode" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Postcode / Care Location</label>
            <input 
              required 
              type="text" 
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
              placeholder="e.g. WC1X 0ND" 
            />
          </div>
        </div>

        {/* Step 2: Contact Info */}
        <div className={`form-step-2 space-y-6 ${step === 2 ? "block" : "hidden"}`}>
          <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider border-l-2 border-gold-500 pl-3">Your Contact Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactName" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
              <input 
                required={step === 2} 
                type="text" 
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
                placeholder="Your full name" 
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Your Email</label>
              <input 
                required={step === 2} 
                type="email" 
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
                placeholder="yourname@domain.com" 
              />
            </div>
          </div>
          <div>
            <label htmlFor="contactPhone" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Phone Number</label>
            <input 
              required={step === 2} 
              type="tel" 
              id="contactPhone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors" 
              placeholder="e.g. +44 7123 456789" 
            />
          </div>
        </div>

        {/* Step 3: Care Requirements */}
        <div className={`form-step-3 space-y-6 ${step === 3 ? "block" : "hidden"}`}>
          <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider border-l-2 border-gold-500 pl-3">Care Requirements</h3>
          <div>
            <label htmlFor="careType" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Type of Care Needed</label>
            <select 
              id="careType"
              name="careType"
              value={formData.careType}
              onChange={handleChange}
              className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none transition-colors"
            >
              <option value="domiciliary">Domiciliary Personal Care</option>
              <option value="supported">Supported Living</option>
              <option value="housekeeping">Home Help &amp; Housekeeping</option>
              <option value="companionship">Companionship &amp; Escort</option>
              <option value="dementia">Specialized Dementia Care</option>
              <option value="other">Other Support</option>
            </select>
          </div>
          <div>
            <label htmlFor="urgency" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Urgency</label>
            <select 
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none transition-colors"
            >
              <option value="immediate">Immediately (Within 1-2 weeks)</option>
              <option value="medium">Medium Term (Within 1 month)</option>
              <option value="planning">Just planning ahead</option>
            </select>
          </div>
        </div>

        {/* Step 4: Additional Details */}
        <div className={`form-step-4 space-y-6 ${step === 4 ? "block" : "hidden"}`}>
          <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider border-l-2 border-gold-500 pl-3">Additional Details</h3>
          <div>
            <label htmlFor="notes" className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">Any specific medical conditions, routines, or expectations? (Optional)</label>
            <textarea 
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4} 
              className="w-full bg-black-pure border border-black-border focus:border-gold-500/50 rounded-lg py-3 px-4 text-sm text-white focus:outline-none transition-colors resize-none" 
              placeholder="Provide any details that will help us prepare for the assessment..."
            ></textarea>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4 border-t border-black-border/40">
          <button 
            onClick={handleBack} 
            type="button" 
            className={`flex-1 py-4 border border-black-border hover:border-gold-500 text-gray-300 hover:text-white text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all ${
              step === 1 ? "hidden" : "block"
            }`}
          >
            Back
          </button>
          
          {step < 4 ? (
            <button 
              onClick={handleNext} 
              type="button" 
              className="flex-1 py-4 bg-gold-500 hover:bg-gold-400 text-black-pure text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all"
            >
              Next Step
            </button>
          ) : (
            <button 
              type="submit" 
              className="flex-1 py-4 bg-gold-500 hover:bg-gold-400 text-black-pure text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all"
            >
              Submit Booking
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
