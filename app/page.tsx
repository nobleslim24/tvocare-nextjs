import Link from "next/link";
import Image from "next/image";
import { 
  Check, 
  Heart, 
  Home as HomeIcon, 
  Sparkles, 
  Users, 
  ArrowRight, 
  PhoneCall, 
  FileSpreadsheet, 
  UserCheck, 
  Activity, 
  GraduationCap, 
  HeartHandshake
} from "lucide-react";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { BookingForm } from "@/components/home/BookingForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black-pure flex flex-col justify-end overflow-hidden border-b border-black-border z-10">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              alt="Dignified Care Services by TVO Care Limited" 
              className="object-cover w-full h-full object-center md:object-right" 
              src="/hero-care.jpg"
              fill
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-transparent to-black-pure"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black-pure via-black-pure/25 to-transparent"></div>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 35% 10%, transparent 15%, #080808 75%)" }}></div>
          </div>
        </div>
        <div className="absolute left-[-10%] top-[10%] w-[40%] h-[40%] rounded-full bg-gold-900/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute right-[5%] bottom-[-5%] w-[30%] h-[30%] rounded-full bg-gold-900/5 blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 min-h-[65vh]">
            <div className="md:col-span-7 flex flex-col justify-end text-left pt-36 md:pt-0 self-end">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-6xl font-display font-bold text-white tracking-tight leading-[1.03]">
                <div className="overflow-hidden block py-1"><span className="hero-title-1 inline-block">Professional</span></div>
                <div className="overflow-hidden block py-1"><span className="hero-title-2 inline-block gold-gradient-text">Domiciliary Care</span></div>
                <div className="overflow-hidden block py-1"><span className="hero-title-3 inline-block text-gold-500">That Feels Like Family.</span></div>
              </h1>
              <div className="hero-desc-1 flex flex-col items-start gap-2.5 mt-8">
                <span className="text-xs font-display font-semibold tracking-widest text-gray-300 uppercase">50+ Happy Families</span>
                <div className="flex -space-x-2.5 overflow-hidden">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="relative inline-block h-8 w-8 rounded-full ring-2 ring-black-pure overflow-hidden">
                      <Image 
                        src={`/images/avatar${num}.jpg`} 
                        alt={`Happy client ${num}`} 
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col justify-start items-start space-y-6 md:pt-12 lg:pl-16 xl:pl-24 self-start md:-mt-6 lg:-mt-10">
              <p className="hero-desc-2 text-sm sm:text-base text-gray-400 font-sans leading-relaxed">Personalized support for mental health and daily living, delivered with empathy in the comfort of your own home.</p>
              <div className="hero-desc-3 w-full sm:w-auto">
                <Link className="inline-flex items-center justify-center font-display font-bold text-xs uppercase tracking-widest bg-gold-500 hover:bg-gold-400 text-black-pure px-8 py-4 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg shadow-gold-500/10" href="/book">Book Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">Family-Run Care Provider</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">Welcome to <br/><span className="gold-gradient-text font-extrabold">TVO CARE</span> Limited</h2>
                <div className="about-divider h-[2px] w-32 bg-gradient-to-r from-gold-500 to-transparent"></div>
              </div>
              <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">At TVO Care, we believe that everyone deserves to live a fulfilling life, regardless of the challenges they face. As a family-run healthcare provider, we specialize in high-quality domiciliary care for adults with mental health needs, physical disabilities, and sensory impairments.</p>
              <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">Our approach is simple: we combine evidence-based care models with genuine human connection to ensure you or your loved ones feel empowered, safe, and truly seen.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-black-border/60">
                <div className="flex items-start gap-2.5">
                  <div className="p-0.5 rounded-full bg-gold-950/40 border border-gold-500/25 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-1">High-Quality Care</h4>
                    <p className="text-[11px] text-gray-500">Fully audited personal plans for custom support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-0.5 rounded-full bg-gold-950/40 border border-gold-500/25 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-1">Human Connection</h4>
                    <p className="text-[11px] text-gray-500">Warm companionship matching you like family.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link className="inline-flex items-center justify-center font-display font-bold text-xs uppercase tracking-widest bg-transparent hover:bg-gold-500 text-gold-500 hover:text-black-pure border border-gold-500/50 hover:border-gold-500 px-8 py-4 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg shadow-gold-500/5" href="/about">Learn More About Us</Link>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full h-[320px] sm:h-[400px] bg-black-rich border border-black-border overflow-hidden rounded-[15px]">
                <Image 
                  src="/about-intro.jpg" 
                  alt="About TVO Care Service Support" 
                  fill
                  className="object-cover rounded-[15px]" 
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 border border-gold-500/10 pointer-events-none hover:border-gold-500/25 transition-colors duration-300 rounded-[15px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative">
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-[120px] lg:h-fit space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block">Our Comprehensive Care Services</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight leading-[1.1]">Support Built <br/><span className="gold-gradient-text font-extrabold">Around You</span></h2>
              </div>
              <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">At TVO Care Limited, we treat our service users like family. Explore our range of personalized support services delivered in the comfort of your home.</p>
              <div className="pt-4">
                <Link className="inline-flex items-center justify-center font-display font-bold text-xs uppercase tracking-widest bg-gold-500 hover:bg-gold-400 text-black-pure px-8 py-4 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg shadow-gold-500/10" href="/book">Book An Assessment</Link>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-12 sm:space-y-16 lg:space-y-24 pb-[100px] lg:pb-[150px]">
              {/* Card 1 */}
              <div className="service-sticky-card sticky top-[100px] sm:top-[120px] bg-black-rich border border-black-border hover:border-gold-500/30 p-8 sm:p-10 rounded-[15px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-colors duration-300" style={{ zIndex: 10 }}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent rounded-t-[15px]"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center">
                    <Heart className="text-gold-500 w-6 h-6" />
                  </div>
                  <span className="font-display font-extrabold text-2xl text-gold-500/25 tracking-wider">01</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide">Domiciliary Care</h3>
                  <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">Our core service provides professional personal care and support directly in your own home. Whether it’s assistance with morning routines, medication management, or specialized mental health support, we ensure you receive high-quality care while maintaining your independence and dignity.</p>
                  <div className="pt-4 border-t border-black-border/40 mt-6">
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gold-500/60 block mb-3">Key Service Features:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Personal care support</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Medication management</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Mental health assistance</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Daily routine support</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-black-border/40 flex items-center justify-between">
                  <Link className="text-xs font-display font-bold tracking-widest text-gold-500 hover:text-gold-400 uppercase flex items-center gap-2 group/btn transition-colors" href="/services/domiciliary-care">Explore Service Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" /></Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="service-sticky-card sticky top-[100px] sm:top-[120px] bg-black-rich border border-black-border hover:border-gold-500/30 p-8 sm:p-10 rounded-[15px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-colors duration-300" style={{ zIndex: 20 }}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent rounded-t-[15px]"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center">
                    <HomeIcon className="text-gold-500 w-6 h-6" />
                  </div>
                  <span className="font-display font-extrabold text-2xl text-gold-500/25 tracking-wider">02</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide">Supported Living</h3>
                  <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">Designed for adults who want to live independently but need a helping hand, our supported living service focuses on empowerment. We provide the right level of background support—ranging from a few hours a week to daily visits—to help service users manage their own tenancies, finances, and daily wellbeing.</p>
                  <div className="pt-4 border-t border-black-border/40 mt-6">
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gold-500/60 block mb-3">Key Service Features:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Tenancy & finance management</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Daily wellbeing check-ins</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Flexible support plans</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Empowerment-focused care</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-black-border/40 flex items-center justify-between">
                  <Link className="text-xs font-display font-bold tracking-widest text-gold-500 hover:text-gold-400 uppercase flex items-center gap-2 group/btn transition-colors" href="/services/supported-living">Explore Service Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" /></Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="service-sticky-card sticky top-[100px] sm:top-[120px] bg-black-rich border border-black-border hover:border-gold-500/30 p-8 sm:p-10 rounded-[15px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-colors duration-300" style={{ zIndex: 30 }}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent rounded-t-[15px]"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center">
                    <Sparkles className="text-gold-500 w-6 h-6" />
                  </div>
                  <span className="font-display font-extrabold text-2xl text-gold-500/25 tracking-wider">03</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide">Home Help & Housekeeping</h3>
                  <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">A clean and organized environment is vital for mental clarity and physical health. Our team assists with essential household tasks, including light cleaning, laundry, meal preparation, and shopping, taking the stress out of home management so you can focus on your recovery and comfort.</p>
                  <div className="pt-4 border-t border-black-border/40 mt-6">
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gold-500/60 block mb-3">Key Service Features:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Light housekeeping & laundry</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Meal prep & cooking support</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Grocery shopping & errands</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Stress-free home management</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-black-border/40 flex items-center justify-between">
                  <Link className="text-xs font-display font-bold tracking-widest text-gold-500 hover:text-gold-400 uppercase flex items-center gap-2 group/btn transition-colors" href="/services/home-help-housekeeping">Explore Service Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" /></Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="service-sticky-card sticky top-[100px] sm:top-[120px] bg-black-rich border border-black-border hover:border-gold-500/30 p-8 sm:p-10 rounded-[15px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-colors duration-300" style={{ zIndex: 40 }}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent rounded-t-[15px]"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center">
                    <Users className="text-gold-500 w-6 h-6" />
                  </div>
                  <span className="font-display font-extrabold text-2xl text-gold-500/25 tracking-wider">04</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide">Companionship & GP Appointments</h3>
                  <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">Navigating healthcare shouldn’t be a lonely or stressful experience. We provide reliable companionship for outings and professional accompaniment to GP or hospital appointments. We ensure you get there safely, help you engage with healthcare professionals, and provide a supportive presence every step of the way.</p>
                  <div className="pt-4 border-t border-black-border/40 mt-6">
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gold-500/60 block mb-3">Key Service Features:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Healthcare visit accompaniment</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Social outings & support</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Safe travel accompaniment</li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>Engaged companionship</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-black-border/40 flex items-center justify-between">
                  <Link className="text-xs font-display font-bold tracking-widest text-gold-500 hover:text-gold-400 uppercase flex items-center gap-2 group/btn transition-colors" href="/services/companionship-gp-appointments">Explore Service Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Journey Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="absolute left-[10%] top-[30%] w-[80%] h-[30%] rounded-full bg-gold-950/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase">Our Care Journey</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mt-2 mb-4">How We Setup Your Care</h2>
            <p className="text-sm sm:text-base text-gray-400 font-sans max-w-xl mx-auto leading-relaxed">We follow a simple, thorough integration framework to ensure safety, alignment, and maximum comfort for your family.</p>
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative flex flex-col justify-center">
            <div className="grid grid-cols-4 gap-8">
              <div className="h-[180px]"></div>
              {/* Step 2 (Top Row) */}
              <div className="timeline-card-wrapper h-[180px] flex flex-col justify-end">
                <div className="bg-black-rich border border-black-border hover:border-gold-500/20 p-6 rounded-[15px] transition-all duration-300 relative">
                  <span className="text-xs font-display font-bold text-gold-500/30 uppercase tracking-widest block mb-1">Step 02</span>
                  <h3 className="text-base font-display font-bold text-white uppercase tracking-wider mb-2">Free Home Assessment</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">We visit the care recipient in their home. This allows us to observe mobility needs, discuss daily routines, and establish risk assessments for safe operations.</p>
                </div>
              </div>
              <div className="h-[180px]"></div>
              {/* Step 4 (Top Row) */}
              <div className="timeline-card-wrapper h-[180px] flex flex-col justify-end">
                <div className="bg-black-rich border border-black-border hover:border-gold-500/20 p-6 rounded-[15px] transition-all duration-300 relative">
                  <span className="text-xs font-display font-bold text-gold-500/30 uppercase tracking-widest block mb-1">Step 04</span>
                  <h3 className="text-base font-display font-bold text-white uppercase tracking-wider mb-2">Care Launch &amp; Oversight</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">Care begins with continuous oversight. We review the care plan weekly, adjusting daily activities and medication routines as needs evolve.</p>
                </div>
              </div>
            </div>
            
            {/* Middle SVG line with dots */}
            <div className="relative h-[120px] my-4 w-full">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 120" preserveAspectRatio="none">
                <path d="M 0 60 C 62.5 20, 187.5 20, 250 60 C 312.5 100, 437.5 100, 500 60 C 562.5 20, 687.5 20, 750 60 C 812.5 100, 937.5 100, 1000 60" fill="none" stroke="#2a2a2a" strokeWidth="2" className="timeline-path"></path>
                <path d="M 0 60 C 62.5 20, 187.5 20, 250 60 C 312.5 100, 437.5 100, 500 60 C 562.5 20, 687.5 20, 750 60 C 812.5 100, 937.5 100, 1000 60" fill="none" stroke="url(#gold-gradient-timeline-desk)" strokeWidth="3"></path>
                <defs>
                  <linearGradient id="gold-gradient-timeline-desk" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b38728"></stop>
                    <stop offset="50%" stopColor="#d4af37"></stop>
                    <stop offset="100%" stopColor="#f7e0a3"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0">
                {/* Dot 1 */}
                <div className="step-dot-outer absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black-pure border border-gold-500/25 flex items-center justify-center z-10 transition-all hover:border-gold-500 shadow-lg shadow-gold-500/5" style={{ left: "12.5%", top: "30px" }}>
                  <div className="w-8 h-8 rounded-full bg-gold-950/20 flex items-center justify-center">
                    <PhoneCall className="text-gold-500 w-3.5 h-3.5" />
                  </div>
                </div>
                {/* Dot 2 */}
                <div className="step-dot-outer absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black-pure border border-gold-500/25 flex items-center justify-center z-10 transition-all hover:border-gold-500 shadow-lg shadow-gold-500/5" style={{ left: "37.5%", top: "90px" }}>
                  <div className="w-8 h-8 rounded-full bg-gold-950/20 flex items-center justify-center">
                    <FileSpreadsheet className="text-gold-500 w-3.5 h-3.5" />
                  </div>
                </div>
                {/* Dot 3 */}
                <div className="step-dot-outer absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black-pure border border-gold-500/25 flex items-center justify-center z-10 transition-all hover:border-gold-500 shadow-lg shadow-gold-500/5" style={{ left: "62.5%", top: "30px" }}>
                  <div className="w-8 h-8 rounded-full bg-gold-950/20 flex items-center justify-center">
                    <UserCheck className="text-gold-500 w-3.5 h-3.5" />
                  </div>
                </div>
                {/* Dot 4 */}
                <div className="step-dot-outer absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black-pure border border-gold-500/25 flex items-center justify-center z-10 transition-all hover:border-gold-500 shadow-lg shadow-gold-500/5" style={{ left: "87.5%", top: "90px" }}>
                  <div className="w-8 h-8 rounded-full bg-gold-950/20 flex items-center justify-center">
                    <Activity className="text-gold-500 w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-8">
              {/* Step 1 (Bottom Row) */}
              <div className="timeline-card-wrapper h-[180px] flex flex-col justify-start">
                <div className="bg-black-rich border border-black-border hover:border-gold-500/20 p-6 rounded-[15px] transition-all duration-300 relative">
                  <span className="text-xs font-display font-bold text-gold-500/30 uppercase tracking-widest block mb-1">Step 01</span>
                  <h3 className="text-base font-display font-bold text-white uppercase tracking-wider mb-2">Initial Consultation</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">Call or write to us. A local care supervisor will discuss your requirements and answer any questions regarding care profiles, rates, and timelines.</p>
                </div>
              </div>
              <div className="h-[180px]"></div>
              {/* Step 3 (Bottom Row) */}
              <div className="timeline-card-wrapper h-[180px] flex flex-col justify-start">
                <div className="bg-black-rich border border-black-border hover:border-gold-500/20 p-6 rounded-[15px] transition-all duration-300 relative">
                  <span className="text-xs font-display font-bold text-gold-500/30 uppercase tracking-widest block mb-1">Step 03</span>
                  <h3 className="text-base font-display font-bold text-white uppercase tracking-wider mb-2">Caregiver Matching</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">We assign a professional caregiver based on medical needs, scheduling, and personality compatibility, ensuring a positive companionship connection.</p>
                </div>
              </div>
              <div className="h-[180px]"></div>
            </div>
          </div>
          
          {/* Mobile Timeline */}
          <div className="lg:hidden w-full relative pl-6 sm:pl-10 space-y-10">
            <div className="absolute left-[19px] sm:left-[27px] top-4 bottom-4 w-[2px] bg-black-border/60"></div>
            
            {/* Mob Step 1 */}
            <div className="relative flex items-start gap-6 sm:gap-8">
              <div className="step-dot-outer-mob absolute -left-[6px] sm:-left-[14px] w-10 h-10 rounded-full bg-black-pure border border-gold-500/25 flex items-center justify-center z-10 shrink-0 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-gold-950/20 flex items-center justify-center">
                  <PhoneCall className="text-gold-500 w-3.5 h-3.5" />
                </div>
              </div>
              <div className="pl-10 sm:pl-8 flex-1">
                <div className="bg-black-rich border border-black-border p-5 rounded-[15px] relative">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xs font-display font-bold text-gold-500/30 uppercase tracking-widest">Step 01</span>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">Initial Consultation</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">Call or write to us. A local care supervisor will discuss your requirements and answer any questions regarding care profiles, rates, and timelines.</p>
                </div>
              </div>
            </div>
            
            {/* Mob Step 2 */}
            <div className="relative flex items-start gap-6 sm:gap-8">
              <div className="step-dot-outer-mob absolute -left-[6px] sm:-left-[14px] w-10 h-10 rounded-full bg-black-pure border border-gold-500/25 flex items-center justify-center z-10 shrink-0 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-gold-950/20 flex items-center justify-center">
                  <FileSpreadsheet className="text-gold-500 w-3.5 h-3.5" />
                </div>
              </div>
              <div className="pl-10 sm:pl-8 flex-1">
                <div className="bg-black-rich border border-black-border p-5 rounded-[15px] relative">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xs font-display font-bold text-gold-500/30 uppercase tracking-widest">Step 02</span>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">Free Home Assessment</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">We visit the care recipient in their home. This allows us to observe mobility needs, discuss daily routines, and establish risk assessments for safe operations.</p>
                </div>
              </div>
            </div>
            
            {/* Mob Step 3 */}
            <div className="relative flex items-start gap-6 sm:gap-8">
              <div className="step-dot-outer-mob absolute -left-[6px] sm:-left-[14px] w-10 h-10 rounded-full bg-black-pure border border-gold-500/25 flex items-center justify-center z-10 shrink-0 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-gold-950/20 flex items-center justify-center">
                  <UserCheck className="text-gold-500 w-3.5 h-3.5" />
                </div>
              </div>
              <div className="pl-10 sm:pl-8 flex-1">
                <div className="bg-black-rich border border-black-border p-5 rounded-[15px] relative">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xs font-display font-bold text-gold-500/30 uppercase tracking-widest">Step 03</span>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">Caregiver Matching</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">We assign a professional caregiver based on medical needs, scheduling, and personality compatibility, ensuring a positive companionship connection.</p>
                </div>
              </div>
            </div>
            
            {/* Mob Step 4 */}
            <div className="relative flex items-start gap-6 sm:gap-8">
              <div className="step-dot-outer-mob absolute -left-[6px] sm:-left-[14px] w-10 h-10 rounded-full bg-black-pure border border-gold-500/25 flex items-center justify-center z-10 shrink-0 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-gold-950/20 flex items-center justify-center">
                  <Activity className="text-gold-500 w-3.5 h-3.5" />
                </div>
              </div>
              <div className="pl-10 sm:pl-8 flex-1">
                <div className="bg-black-rich border border-black-border p-5 rounded-[15px] relative">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xs font-display font-bold text-gold-500/30 uppercase tracking-widest">Step 04</span>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">Care Launch &amp; Oversight</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">Care begins with continuous oversight. We review the care plan weekly, adjusting daily activities and medication routines as needs evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">Why Choose TVO CARE Limited?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">Expertise you can <span className="gold-gradient-text font-extrabold">trust</span>.<br/>Compassion you can <span className="gold-gradient-text font-extrabold">feel</span>.</h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
          </div>
          
          {/* Bento Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Bento 1: Family-run Heart */}
              <div className="bento-card bg-black-rich border border-black-border rounded-[20px] overflow-hidden flex flex-col justify-between group p-6">
                <div className="h-[200px] flex items-center justify-center relative overflow-hidden bg-black-pure/40 border border-black-border/40 rounded-xl p-4 mb-6">
                  {/* Chat Mockup */}
                  <div className="w-full space-y-3 font-sans text-xs">
                    <div className="bg-black-muted/40 p-2.5 rounded-lg rounded-tl-none max-w-[80%] border border-black-border/30">
                      <span className="text-[10px] text-gold-400 font-semibold block mb-0.5">Maddy (TVO Care)</span>
                      Hi Daniel! Just letting you know your dad had a great morning walk. He's resting comfortably.
                    </div>
                    <div className="bg-gold-950/20 p-2.5 rounded-lg rounded-tr-none max-w-[80%] ml-auto text-right border border-gold-500/10">
                      <span className="text-[10px] text-gold-400 font-semibold block mb-0.5">Daniel</span>
                      Thank you so much! It means the world to us.
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-2">A Family-Run Heart</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">We aren't a large, disconnected corporation. Because we are family-led, we take every care plan personally, treating service users with the respect and dedication we would provide to our own family.</p>
                </div>
              </div>
              
              {/* Bento 2: Empathy at Our Core */}
              <div className="bento-card bg-black-rich border border-black-border rounded-[20px] overflow-hidden flex flex-col justify-between group p-6">
                <div className="h-[200px] flex items-center justify-center relative bg-black-pure/40 border border-black-border/40 rounded-xl mb-6">
                  <HeartHandshake className="w-16 h-16 text-gold-500/30 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-2">Empathy at Our Core</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">We understand that inviting someone into your home requires immense trust. We prioritize emotional intelligence in everything we do, ensuring a supportive environment where you feel valued.</p>
                </div>
              </div>
              
              {/* Bento 3: Evidence-Based Care */}
              <div className="bento-card bg-black-rich border border-black-border rounded-[20px] overflow-hidden flex flex-col justify-between group p-6">
                <div className="h-[200px] flex flex-col items-center justify-center relative bg-black-pure/40 border border-black-border/40 rounded-xl p-6 mb-6">
                  <div className="w-full flex items-center justify-between text-[10px] text-gray-500 mb-2 font-mono uppercase">
                    <span>Plan Adherence</span>
                    <span className="text-gold-500 font-bold">99.4%</span>
                  </div>
                  <div className="w-full bg-black-border/50 h-3 rounded-full overflow-hidden border border-black-border">
                    <div className="bg-gradient-to-r from-gold-900 to-gold-500 h-full rounded-full w-[99.4%] shadow-lg"></div>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-4 font-sans text-center">Research-backed methods & regular audited check-ins</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-2">Evidence-Based Care</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">We don’t believe in &quot;one size fits all.&quot; Our care strategies are rooted in the latest healthcare research, ensuring that our mental health and physical support methods are safe and effective.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bento 4: Continuous Learning */}
              <div className="bento-card bg-black-rich border border-black-border p-6 rounded-[20px] flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-20 h-20 rounded-full bg-gold-950/20 border border-gold-500/10 shrink-0 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-2">Continuous Learning</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">The healthcare landscape is always evolving, and so are we. Our team is committed to ongoing training, ensuring that our staff are always equipped with the best tools to support complex needs.</p>
                </div>
              </div>
              
              {/* Bento 5: Inclusive & Diverse Support */}
              <div className="bento-card bg-black-rich border border-black-border p-6 rounded-[20px] flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-2.5">Inclusive &amp; Diverse Support</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans mb-4">From dementia care for the elderly to specialized support for eating disorders and sensory impairments, we provide a safe space for adults of all backgrounds and needs (ages 18–65+).</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Adults 18+", "Supported Living", "Mental Health", "Physical Needs", "Sensory Support", "Elderly Care"].map((tag) => (
                    <span key={tag} className="text-[9px] font-display font-bold uppercase tracking-wider bg-gold-950/30 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[60%] h-[30%] rounded-full bg-gold-950/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mt-2 mb-4">What Families Say About Us</h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Assessment Form Section */}
      <section id="book-assessment-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase">Schedule a Consultation</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight mt-2 mb-4">Ready to Secure Exceptional Support?</h2>
            <p className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">Book a complimentary, no-obligation care assessment in the comfort of your home. We'll help design a custom support routine suited to your budget and needs.</p>
          </div>
          <div className="bg-black-rich border border-black-border p-6 sm:p-10 rounded-[20px]">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight mt-2 mb-4">Your Questions Answered</h2>
            <p className="text-sm text-gray-400 max-w-lg mx-auto">At TVO CARE Limited, we want you to feel fully informed and confident in our services. Here are answers to some of the most common questions about our care delivery.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
