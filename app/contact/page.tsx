import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      {/* Subpage Banner */}
      <section className="relative min-h-[35vh] bg-black-pure flex flex-col justify-end overflow-hidden border-b border-black-border z-10 py-16">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              alt="TVO Care Contact Banner" 
              className="object-cover w-full h-full opacity-25 object-center" 
              src="/hero-care.jpg" 
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-pure to-black-pure/50"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-wider text-gray-500 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&bull;</span>
            <span className="text-gold-500">Contact Us</span>
          </nav>
          <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-2">Get in Touch</span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-2">Contact Us</h1>
          <p className="text-sm text-gray-400 font-sans">Reach out to our care coordinators to start planning support.</p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-2">Contact Details</span>
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-3">We Are Here to Help</h2>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">Reach out to our clinical managers for guidance, pricing reviews, or immediate care coordination.</p>
            </div>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-gold-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-1">Office Address</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">2 Frederick Street, Kings Cross,<br/>London, United Kingdom, WC1X 0ND</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center shrink-0">
                  <Phone className="text-gold-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-1">Phone Number</h4>
                  <a href="tel:+442079460192" className="text-xs sm:text-sm text-gray-400 hover:text-white leading-relaxed font-sans transition-colors">+44 207 946 0192</a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center shrink-0">
                  <Mail className="text-gold-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-1">Email Address</h4>
                  <a href="mailto:info@tvocare.co.uk" className="text-xs sm:text-sm text-gray-400 hover:text-white leading-relaxed font-sans transition-colors">info@tvocare.co.uk</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center shrink-0">
                  <Clock className="text-gold-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-1">Office Hours</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p className="text-[10px] text-gold-500 font-display font-bold uppercase tracking-wider mt-1">Emergency Support: 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-black-rich border border-black-border p-6 sm:p-10 rounded-[25px]">
            <div className="mb-6">
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider border-l-2 border-gold-500 pl-3 mb-2">Send a Message</h3>
              <p className="text-xs text-gray-400 font-sans">Please fill out the form below and we will respond as soon as possible.</p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-pure">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-2">Our Location</span>
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Find Us in Kings Cross</h2>
            <p className="text-xs text-gray-400 mt-2 max-w-sm mx-auto font-sans leading-relaxed">We are located at 2 Frederick Street, Kings Cross, London, United Kingdom, WC1X 0ND.</p>
          </div>
          
          {/* Mock Map Container */}
          <div className="relative w-full h-[350px] bg-black-rich border border-black-border rounded-[25px] overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-inner">
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #d4af37 1px, transparent 0), radial-gradient(circle at 60% 80%, #d4af37 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
            
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold-950/20 border border-gold-500/20 flex items-center justify-center mx-auto shadow-md">
                <MapPin className="text-gold-500 w-6 h-6 animate-bounce" />
              </div>
              <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">TVO Care Limited Location Map</h4>
              <p className="text-xs text-gray-500 font-mono">WC1X 0ND, Kings Cross, London, UK</p>
              <a href="https://maps.google.com/?q=2+Frederick+Street,+Kings+Cross,+London,+WC1X+0ND" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-display font-bold text-[10px] uppercase tracking-widest bg-gold-500 hover:bg-gold-400 text-black-pure px-5 py-2.5 rounded-full transition-all">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
