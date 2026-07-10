import { BookingForm } from "@/components/home/BookingForm";

export default function BookAssessment() {
  return (
    <>
      <section className="relative w-full bg-black-pure overflow-hidden border-b border-black-border">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-2">Setup Journey</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mb-4 mt-2 uppercase">Book Assessment</h1>
            <p className="text-sm text-gray-400 font-sans">Use our secure portal to arrange a complimentary, no-obligation home visit from one of our clinical managers.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-pure relative overflow-hidden flex-grow flex items-center justify-center border-b border-black-border">
        <div className="w-full max-w-3xl bg-black-rich border border-black-border p-6 sm:p-12 rounded-[25px] shadow-2xl relative z-10">
          <div className="absolute inset-0 pointer-events-none rounded-[25px] shadow-[0_0_80px_-15px_rgba(212,175,55,0.1)]"></div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
