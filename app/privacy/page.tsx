import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative w-full bg-black-pure overflow-hidden border-b border-black-border">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-2">Legal Documentation</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mb-4 mt-2 uppercase">Privacy Policy</h1>
            <p className="text-sm text-gray-400 font-sans">Last updated: July 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-pure flex-grow border-b border-black-border">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">1. Introduction</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8">
            Welcome to TVO Care Limited. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">2. Data We Collect</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-5 text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">3. How We Use Your Data</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you; Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests; Where we need to comply with a legal obligation.
          </p>

          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">4. Contact Us</h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8">
            If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:<br/>
            Email address: <a href="mailto:info@tvocare.co.uk" className="text-gold-500 hover:underline">info@tvocare.co.uk</a><br/>
            Postal address: 2 Frederick Street, Kings Cross, London, United Kingdom, WC1X 0ND
          </p>
        </div>
      </section>
    </>
  );
}
