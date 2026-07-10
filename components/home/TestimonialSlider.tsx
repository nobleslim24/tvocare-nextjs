"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialSlider() {
  const testimonials = [
    {
      text: "TVO Care has completely transformed our family’s life. The caretakers are incredibly professional, gentle, and treat my mother like their own family. Absolute peace of mind.",
      author: "Sarah Jenkins",
      role: "Daughter of Client",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      text: "I was hesitant about having someone in my home, but the companion care matches have been perfect. We cook, discuss history, and they help me get around safely.",
      author: "Robert Davies",
      role: "Client",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      text: "Their specialized dementia care team is outstanding. They knew exactly how to ease my father’s anxiety and establish a routine that made him feel secure.",
      author: "Emily Carter",
      role: "Primary Guardian",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      text: "Professional, compassionate, and reliable. The care provided to my father improved his quality of life significantly. Highly recommended!",
      author: "Mark Johnson",
      role: "Son of Client",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      text: "I love my weekly visits! The carers are so friendly and helpful. It makes a huge difference in my day.",
      author: "Lisa Thompson",
      role: "Client",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      text: "Exceptional service with attention to detail. The team genuinely cares about the well-being of their clients.",
      author: "David Wilson",
      role: "Family Member",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative bg-black-rich border border-black-border p-8 sm:p-12 rounded-[25px] min-h-[250px] flex items-center">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent rounded-t-[25px]"></div>
      
      {/* Slides */}
      <div className="w-full">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`space-y-6 transition-opacity duration-500 ${
              idx === current ? "block animate-in fade-in duration-500" : "hidden"
            }`}
          >
            <p className="text-base sm:text-lg text-gray-300 italic font-sans leading-relaxed">
              &quot;{t.text}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-500/20">
                <Image
                  src={t.img}
                  alt={t.author}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">{t.author}</h4>
                <p className="text-[10px] text-gray-500 font-sans uppercase">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Arrows */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-30">
        <button
          onClick={handlePrev}
          className="w-8 h-8 rounded-full border border-black-border hover:border-gold-500 text-gray-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 rounded-full border border-black-border hover:border-gold-500 text-gray-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
