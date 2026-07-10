"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black-pure/80 backdrop-blur-md py-3 shadow-lg shadow-black-pure/20 border-b border-black-border" : "bg-transparent py-4 sm:py-5 backdrop-blur-[7px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                alt="TVO Care Limited"
                width={80}
                height={40}
                className="object-contain mix-blend-luminosity brightness-110 hover:brightness-125 transition-all duration-300"
                src="/logo.png"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center bg-black-rich/65 border border-black-border px-5 py-2.5 rounded-full backdrop-blur-md">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-xs font-display font-semibold tracking-wider uppercase transition-colors duration-200 ${
                        isActive ? "text-gold-500" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/book"
                className="inline-flex items-center justify-center font-display font-bold text-xs uppercase tracking-widest bg-gold-500 hover:bg-gold-400 text-black-pure px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Book Assessment
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-black-pure/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-12 flex flex-col items-center justify-center space-y-8 text-center w-full max-w-xs">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-display font-bold uppercase tracking-wider transition-colors ${
                  isActive ? "text-gold-500" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-8 border-t border-black-border/40 w-full">
            <Link
              href="/book"
              className="block w-full text-center font-display font-bold text-xs uppercase tracking-widest bg-gold-500 hover:bg-gold-400 text-black-pure py-4 rounded-full shadow-lg shadow-gold-500/10 transition-colors"
            >
              Book Assessment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
