import Link from "next/link";
import Image from "next/image";
import { Eye, Target, GraduationCap, Heart, Sparkles, Users, Info } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <GraduationCap className="text-gold-500 w-5 h-5" />,
      title: "Continuous Learning",
      description: "We utilize evidence-based care models, staying updated on the latest healthcare practices to provide the best possible support."
    },
    {
      icon: <Heart className="text-gold-500 w-5 h-5" />,
      title: "Caring & Empathy",
      description: "We lead with our hearts. We listen, we understand, and we treat every individual with the kindness they deserve."
    },
    {
      icon: <Sparkles className="text-gold-500 w-5 h-5" />,
      title: "Empowerment",
      description: "Our goal is to give you the tools and support to lead your own life. We focus on what you can do."
    },
    {
      icon: <Users className="text-gold-500 w-5 h-5" />,
      title: "Togetherness",
      description: "We work as a unified team—caregivers, service users, and families—because we achieve the best outcomes when we work together."
    }
  ];

  const team = [
    {
      name: "Sarah Jenkins",
      role: "Founder & Managing Director",
      description: "Sarah established TVO CARE Limited with a deep commitment to family-led, compassionate care. She oversees our strategic vision and ensures our family-first philosophy is felt by every member of our community."
    },
    {
      name: "Dr. David Sterling",
      role: "Clinical Director",
      description: "With years of specialized clinical experience, Dr. Sterling leads our evidence-based care design and registration processes, making sure clinical safety meets everyday warmth."
    },
    {
      name: "Clara Brooks",
      role: "Head of Care Coordination",
      description: "Clara connects our clients with the perfect caregivers. She ensures every support checklist is a pathway to independence and that care matches personal preferences."
    }
  ];

  return (
    <>
      {/* Subpage Banner */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-black-pure via-black-rich to-gold-950/15 flex flex-col justify-end overflow-hidden border-b border-black-border z-10 py-16">
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="absolute left-[-10%] top-[10%] w-[45%] h-[45%] rounded-full bg-gold-900/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute right-[5%] bottom-[-5%] w-[30%] h-[30%] rounded-full bg-gold-900/5 blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 text-center">
          <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">About Us</span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">About TVO CARE Limited</h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">Rooted in Family. Driven by Excellence. Focused on You.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">Who We Are</span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight mb-4">Family-Led Care in the Heart of Kings Cross</h2>
                <div className="h-[2px] w-24 bg-gradient-to-r from-gold-500 to-transparent"></div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">Located in the heart of Kings Cross, London, TVO CARE Limited is a family-run domiciliary care provider dedicated to supporting individuals with mental health needs, disabilities, and age-related challenges.</p>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed italic border-l-2 border-gold-500 pl-4">&quot;Care should be more than a checklist of tasks—it should be a pathway to independence.&quot;</p>
              <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">As a family-led organization, we bring a level of personal commitment and accountability that larger corporations often miss. When you choose TVO CARE, you aren’t just a &quot;service user&quot;; you are a member of our community.</p>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full h-[320px] bg-gradient-to-br from-black-rich to-black-pure border border-black-border overflow-hidden rounded-[20px] flex flex-col items-center justify-center p-8 group">
                <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
                <div className="w-16 h-16 rounded-full border border-gold-500/20 bg-black-pure flex items-center justify-center mb-6">
                  <span className="text-xl font-display font-extrabold gold-gradient-text">TVO</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider mb-2 text-center">Togetherness, Value, Oversight</h3>
                <p className="text-xs text-gray-500 font-sans text-center max-w-xs">Built on family trust and designed for independent living.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <div className="relative w-full h-[320px] bg-gradient-to-br from-black-rich to-black-pure border border-black-border overflow-hidden rounded-[20px] flex flex-col items-center justify-center p-8 group">
                <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
                <div className="w-16 h-16 rounded-full border border-gold-500/20 bg-black-pure flex items-center justify-center mb-6">
                  <Target className="text-gold-500 w-8 h-8" />
                </div>
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider mb-2 text-center">Quality &amp; Standards</h3>
                <p className="text-xs text-gray-500 font-sans text-center max-w-xs">Undergoing rigorous healthcare audits to align with CQC requirements.</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">Why We Started</span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight mb-4">Bridging Clinical Excellence &amp; Compassion</h2>
                <div className="h-[2px] w-24 bg-gradient-to-r from-gold-500 to-transparent"></div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">The journey of TVO CARE Limited began with a vision to bridge the gap between clinical excellence and compassionate, home-based support. We recognized that for people living with mental health issues or physical disabilities, the right environment is everything.</p>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">We chose to start this business to provide a service where empathy is the standard and evidence-based care is the foundation. We are currently undergoing our formal registration processes to ensure that from day one, our clients receive care that meets the highest national standards of safety and quality.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-950/20 border border-gold-500/20 text-[10px] font-display font-bold uppercase tracking-wider text-gold-400">
                <Info className="w-3.5 h-3.5" /> Currently Undergoing Registration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-black-rich border border-black-border p-8 sm:p-10 rounded-[20px] hover:border-gold-500/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center mb-6">
              <Eye className="text-gold-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide mb-3">Our Vision</h3>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">To build a successful healthcare business that sets the gold standard for domiciliary care in London, recognized for transforming lives through empowerment and specialized support.</p>
          </div>
          
          {/* Mission */}
          <div className="bg-black-rich border border-black-border p-8 sm:p-10 rounded-[20px] hover:border-gold-500/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-gold-950/20 border border-gold-500/10 flex items-center justify-center mb-6">
              <Target className="text-gold-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide mb-3">Our Mission</h3>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">To provide top-tier, personalized care that promotes independence, dignity, and wellbeing for every individual we serve.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">DNA of TVO CARE</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">The Values That Define Us</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-black-rich border border-black-border p-6 rounded-[15px]">
                <div className="w-10 h-10 bg-gold-950/20 border border-gold-500/10 rounded-full flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h4 className="text-base font-display font-bold text-white uppercase tracking-wider mb-2">{v.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-3">Family Leadership</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">Meet the Hearts Behind TVO CARE</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-lg mx-auto">As a family-run organization, we bring a level of personal commitment, accountability, and a personal promise of care directly to your doorstep.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-black-rich border border-black-border rounded-[20px] overflow-hidden group hover:border-gold-500/20 transition-all duration-300">
                <div className="h-[280px] bg-gradient-to-b from-black-rich to-black-pure flex flex-col items-center justify-center border-b border-black-border relative group-hover:from-black-rich group-hover:to-gold-950/10 transition-all duration-500">
                  <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)", backgroundSize: "16px 16px" }}></div>
                  <div className="w-24 h-24 rounded-full border border-gold-500/20 group-hover:border-gold-500/50 bg-black-pure flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300 transform group-hover:scale-105">
                    <div className="absolute inset-0.5 rounded-full border border-gold-500/5 bg-gradient-to-br from-gold-950/20 to-black-pure"></div>
                    <span className="relative z-10 text-3xl font-display font-extrabold gold-gradient-text tracking-widest">
                      {member.name.split(" ").map(n => n.replace("Dr.", "").trim()[0]).filter(Boolean).join("")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[9px] font-display font-bold uppercase tracking-wider text-gold-500">{member.role}</span>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider mt-1 mb-2">{member.name}</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-pure border-b border-black-border relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-wide">Our Commitment to You</h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">Whether we are helping with housekeeping, providing companionship to GP appointments, or offering specialized mental health support, our commitment remains the same: to treat your home with respect and your life with care.</p>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">We invite you to join the TVO CARE family, where your voice is heard, your independence is valued, and your wellbeing is our highest priority.</p>
          <div className="pt-4">
            <Link className="inline-flex items-center justify-center font-display font-bold text-xs uppercase tracking-widest bg-gold-500 hover:bg-gold-400 text-black-pure px-8 py-4 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg shadow-gold-500/10" href="/book">Request a Free Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
