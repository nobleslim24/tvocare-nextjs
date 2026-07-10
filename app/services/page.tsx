import Link from "next/link";
import Image from "next/image";
import { Heart, Home as HomeIcon, Sparkles, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      num: "01",
      icon: <Heart className="text-gold-500 w-6 h-6" />,
      title: "Domiciliary Care",
      slug: "domiciliary-care",
      description: "Our primary goal is to help you stay in the home you love. We provide professional personal care tailored to your specific routine.",
      features: ["Personal hygiene", "Dressing", "Medication management", "Mobility support"],
      bestFor: "Individuals who need daily help to remain living safely and independently."
    },
    {
      num: "02",
      icon: <HomeIcon className="text-gold-500 w-6 h-6" />,
      title: "Supported Living",
      slug: "supported-living",
      description: "We empower adults with mental health needs or disabilities to manage their own homes. This service bridges the gap between total independence and 24-hour care.",
      features: ["Tenancy support", "Budgeting", "Building life skills", "Emotional wellbeing"],
      bestFor: "Adults (18-65) looking to gain confidence and autonomy in a community setting."
    },
    {
      num: "03",
      icon: <Sparkles className="text-gold-500 w-6 h-6" />,
      title: "Home Help & Housekeeping",
      slug: "home-help-housekeeping",
      description: "A well-kept home is essential for mental clarity and physical health. We take care of the \"heavy lifting\" so you can focus on your wellbeing.",
      features: ["Light cleaning", "Laundry", "Grocery shopping", "Meal preparation"],
      bestFor: "Those who find physical chores overwhelming or need support maintaining a healthy living environment."
    },
    {
      num: "04",
      icon: <Users className="text-gold-500 w-6 h-6" />,
      title: "Companionship & GP Appointments",
      slug: "companionship-gp-appointments",
      description: "Healthcare and social interaction should never be stressful. Our carers provide a friendly face and reliable transport for your essential outings.",
      features: ["Appointment escort", "Consultation note-taking", "Social outings", "Travel accompaniment"],
      bestFor: "Individuals who feel anxious about medical visits or those seeking meaningful social connection."
    }
  ];

  return (
    <>
      {/* Subpage Banner */}
      <section className="relative min-h-[40vh] bg-black-pure flex flex-col justify-end overflow-hidden border-b border-black-border z-10 py-16">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              alt="TVO Care Services Banner" 
              className="object-cover w-full h-full opacity-35 object-center" 
              src="/hero-care.jpg" 
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-pure to-black-pure/50"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 text-center">
          <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">Our Services</span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">Our Care Services</h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">Tailored Support for Independent Living</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-pure text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-wide">More than just assistance. We provide a partnership.</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">At TVO CARE Limited, our services are built on evidence-based care models and a deep commitment to the empowerment of our service users. Based in Kings Cross, we serve a diverse range of needs across London with a personal, family-run touch.</p>
        </div>
      </section>

      {/* Core Services Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">Core Care Services</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">Programs Tailored To Your Routine</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">Explore our range of personalized support services designed to promote dignity and safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-black-rich border border-black-border rounded-[20px] p-8 hover:border-gold-500/20 transition-all flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="font-display font-extrabold text-xl text-gold-500/20">{service.num}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider group-hover:text-gold-500 transition-colors">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">{service.description}</p>
                    <div className="pt-3 border-t border-black-border/40">
                      <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gold-500/60 block mb-2">Assistance with:</span>
                      <ul className="grid grid-cols-2 gap-2 text-[11px] text-gray-500">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3">
                      <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gray-400 block">Best For:</span>
                      <p className="text-[11px] text-gray-500 font-sans">{service.bestFor}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-black-border/40 flex gap-4">
                  <Link href={`/services/${service.slug}`} className="flex-1 text-center py-3 bg-black-muted/40 hover:bg-black-muted border border-black-border hover:border-gold-500/30 text-xs font-display font-bold uppercase tracking-widest rounded-lg text-white transition-all">Explore Details</Link>
                  <Link href="/book" className="flex-1 text-center py-3 bg-gold-500 hover:bg-gold-400 text-black-pure text-xs font-display font-bold uppercase tracking-widest rounded-lg transition-all">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
