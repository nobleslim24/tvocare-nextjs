import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <section className="relative w-full bg-black-pure overflow-hidden border-b border-black-border">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-2">Legal Documentation</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mb-4 mt-2 uppercase">Terms of Service</h1>
            <p className="text-sm text-gray-400 font-sans">Last updated: July 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-pure flex-grow border-b border-black-border">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">1. Agreement to Terms</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and TVO Care Limited (“we,” “us” or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>

          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">2. Use of Our Services</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8">
            You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behaviour includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website.
          </p>

          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">3. Limitation of Liability</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8">
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">4. Contact Us</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8">
            If you have any questions about these Terms, please contact us in the following ways:<br/>
            Email address: <a href="mailto:info@tvocare.co.uk" className="text-gold-500 hover:underline">info@tvocare.co.uk</a><br/>
            Postal address: 2 Frederick Street, Kings Cross, London, United Kingdom, WC1X 0ND
          </p>
        </div>
      </section>
    </>
  );
}
