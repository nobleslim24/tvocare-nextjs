"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqAccordion() {
  const faqs = [
    {
      num: "01",
      question: "What areas do you cover and who can access your services?",
      answer: "We provide care for adults aged 18 to 65+, specializing in mental health support, dementia care, physical disabilities, and sensory impairments. Our services are available to individuals living within King's Cross / Clerkenwell, Camden, Greater London who require professional support to maintain their independence at home."
    },
    {
      num: "02",
      question: "How do you ensure the quality of your care?",
      answer: "At TVO CARE Limited, quality is driven by our commitment to evidence-based care models. This means our staff are trained in methods proven to be effective. As a family-run business, we also conduct regular internal reviews and maintain open lines of communication with families to ensure our high standards are always met."
    },
    {
      num: "03",
      question: "Can I be involved in creating my own care plan?",
      answer: "Absolutely. We believe in empowerment and togetherness. We work closely with the service user, their family, and healthcare professionals to co-create a person-centered care plan. This ensures that the support we provide aligns perfectly with your personal goals, routines, and preferences."
    },
    {
      num: "04",
      question: "What makes your mental health support different?",
      answer: "Our approach is rooted in empathy and continuous learning. We don't just assist with daily tasks; we focus on emotional wellbeing and empowerment. Our team is trained to understand the complexities of mental health and eating disorders, providing a non-judgmental environment that encourages recovery and stability."
    },
    {
      num: "05",
      question: "How do I get started with TVO CARE Limited?",
      answer: "The process is simple. You can reach out to us via email at info@tvocare.co.uk or call us at +44 207 946 0192. We will arrange a friendly, no-obligation initial assessment to discuss your needs and how we can best support you or your loved one."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="bg-black-rich border border-black-border rounded-[15px] overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full text-left p-6 sm:p-8 flex justify-between items-center text-white hover:text-gold-500 transition-colors focus:outline-none"
            >
              <span className="text-sm sm:text-base font-display font-bold uppercase tracking-wide flex items-center">
                <span className="text-gold-500/50 mr-4 font-mono">{faq.num}</span>
                {faq.question}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-gold-500/50 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`} 
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div 
                className="px-6 sm:px-8 pb-6 sm:pb-8 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: faq.answer.replace(
                    "info@tvocare.co.uk",
                    '<a href="mailto:info@tvocare.co.uk" class="text-gold-500 underline hover:text-gold-400">info@tvocare.co.uk</a>'
                  ).replace(
                    "+44 207 946 0192",
                    '<a href="tel:+442079460192" class="text-gold-500 underline hover:text-gold-400">+44 207 946 0192</a>'
                  )
                }}
              >
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
