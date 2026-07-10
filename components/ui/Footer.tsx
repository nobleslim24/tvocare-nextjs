import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black-pure border-t border-black-border pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-black-border/40">
        <div className="md:col-span-5 space-y-4">
          <Link href="/" className="inline-block">
             <Image
                alt="TVO Care Limited"
                width={100}
                height={50}
                className="h-10 object-contain brightness-110"
                src="/logo.png"
              />
          </Link>
          <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
            Providing premium, dignified home care services and companion assistance. Our mission is to enrich lives by ensuring independence, safety, and comfort at home.
          </p>
        </div>
        
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white">Navigation</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Care Services</Link></li>
            <li><Link href="/book" className="hover:text-white transition-colors">Book Assessment</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white">Get in Touch</h4>
          <ul className="space-y-3 text-xs sm:text-sm font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="text-gold-500 w-4 h-4 shrink-0 mt-0.5" />
              <span>2 Frederick Street, Kings Cross, London, United Kingdom, WC1X 0ND</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="text-gold-500 w-4 h-4 shrink-0" />
              <a href="tel:+442079460192" className="hover:text-white transition-colors">+44 207 946 0192</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="text-gold-500 w-4 h-4 shrink-0" />
              <a href="mailto:info@tvocare.co.uk" className="hover:text-white transition-colors">info@tvocare.co.uk</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans">
        <span>&copy; {new Date().getFullYear()} TVO Care Limited. All rights reserved. Built by <a href="https://elixonnltd.co.uk/" target="_blank" rel="noreferrer" className="text-gold-500 hover:underline">Elixonn Limited</a></span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
