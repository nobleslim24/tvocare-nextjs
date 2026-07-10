import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, PhoneCall } from "lucide-react";

// Types
type ServiceContent = {
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
};

// Data matching the HTML files exactly
const servicesData: Record<string, ServiceContent> = {
  "domiciliary-care": {
    title: "Domiciliary Care",
    subtitle: "Domiciliary Care",
    description: [
      "Whether it’s assistance with morning routines, medication management, or specialized mental health support, we ensure you receive high-quality care while maintaining your independence and dignity.",
      "Our caregivers are fully vetted and matched to your personality, routines, and healthcare requirements, establishing a positive, family-like dynamic in your household."
    ],
    features: [
      "Personal care support",
      "Medication management",
      "Mental health assistance",
      "Daily routine support"
    ]
  },
  "supported-living": {
    title: "Supported Living",
    subtitle: "Supported Living",
    description: [
      "Designed for adults who want to live independently but need a helping hand, our supported living service focuses on empowerment. We provide the right level of background support—ranging from a few hours a week to daily visits—to help service users manage their own tenancies, finances, and daily wellbeing."
    ],
    features: [
      "Tenancy & finance management",
      "Daily wellbeing check-ins",
      "Flexible support plans",
      "Empowerment-focused care"
    ]
  },
  "home-help-housekeeping": {
    title: "Home Help & Housekeeping",
    subtitle: "Home Help & Housekeeping",
    description: [
      "A clean and organized environment is vital for mental clarity and physical health. Our team assists with essential household tasks, including light cleaning, laundry, meal preparation, and shopping, taking the stress out of home management so you can focus on your recovery and comfort."
    ],
    features: [
      "Light housekeeping & laundry",
      "Meal prep & cooking support",
      "Grocery shopping & errands",
      "Stress-free home management"
    ]
  },
  "companionship-gp-appointments": {
    title: "Companionship & GP Appointments",
    subtitle: "Companionship & GP Appointments",
    description: [
      "Navigating healthcare shouldn’t be a lonely or stressful experience. We provide reliable companionship for outings and professional accompaniment to GP or hospital appointments. We ensure you get there safely, help you engage with healthcare professionals, and provide a supportive presence every step of the way."
    ],
    features: [
      "Healthcare visit accompaniment",
      "Social outings & support",
      "Safe travel accompaniment",
      "Engaged companionship"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Subpage Banner */}
      <section className="relative min-h-[35vh] bg-black-pure flex flex-col justify-end overflow-hidden border-b border-black-border z-10 py-16">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              alt={`TVO Care ${service.title} Banner`}
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
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>&bull;</span>
            <span className="text-gold-500">{service.title}</span>
          </nav>
          <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-2">Care Program Overview</span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-2">{service.title}</h1>
          <p className="text-sm text-gray-400 font-sans">Tailored support plan for staying in the home you love.</p>
        </div>
      </section>

      {/* Detail Description */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-wide border-l-2 border-gold-500 pl-3">
              {params.slug === "domiciliary-care" ? "Dignified Personal Care" : service.title}
            </h2>
            {service.description.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                {para}
              </p>
            ))}
            
            <div className="pt-8 border-t border-black-border/40 space-y-4">
              <h3 className="text-xs font-display font-bold uppercase tracking-wider text-gold-500">What this care program includes:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans text-gray-300">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-gold-500 w-5 h-5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sidebar Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-black-rich border border-black-border p-6 rounded-[20px] space-y-6">
              <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">Need Immediate Care?</h3>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">Contact our local office or submit an assessment. We will arrange a free home consultation to formulate a customized plan.</p>
              <div className="flex flex-col gap-3">
                <Link href="/book" className="w-full text-center py-3.5 bg-gold-500 hover:bg-gold-400 text-black-pure text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all">
                  Book Assessment
                </Link>
                <a href="tel:+442079460192" className="w-full text-center py-3.5 border border-black-border hover:border-gold-500 text-gray-300 hover:text-white text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2">
                  <PhoneCall size={14} className="text-gold-500" /> Call Care Office
                </a>
              </div>
            </div>
            
            <div className="bg-black-rich border border-black-border p-6 rounded-[20px] space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-gold-500 w-5 h-5" />
                <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">Care Standards Guaranteed</h3>
              </div>
              <p className="text-[11px] text-gray-500 font-sans leading-relaxed">Our care routines comply directly with national quality registers. Daily logs, health observations, and schedule adherence records are kept securely inside the client's home.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
