import { Link } from "@tanstack/react-router";
import { Phone, CheckCircle, Wrench, AlertTriangle } from "lucide-react";

const leakTypes = [
  { title: "Dripping Faucets", desc: "A dripping faucet wastes water and indicates worn washers or cartridges. We repair or replace faucet components to stop the drip." },
  { title: "Under-Sink Pipe Leaks", desc: "Supply lines and drain connections under sinks are common leak points. We repair or replace leaking connections and pipes." },
  { title: "Toilet Leaks", desc: "Toilets can leak at the base, tank, or supply line. We diagnose and repair all types of toilet leaks." },
  { title: "Hidden Wall/Ceiling Leaks", desc: "We locate hidden leaks using careful inspection, then make targeted repairs to minimize wall damage." },
  { title: "Pipe Joint Leaks", desc: "Joints and connections in older Chicago homes often fail over time. We repair or replace leaking pipe joints." },
  { title: "Outdoor Hose Bib Leaks", desc: "Outdoor faucets are prone to leaking, especially after Chicago winters. We repair or replace leaking hose bibs." },
];

const warningSigns = [
  "Unexplained increase in water bill",
  "Damp or discolored spots on walls or ceilings",
  "Mold or mildew smell without visible source",
  "Sound of running water when nothing is on",
  "Dripping sounds inside walls",
  "Warped or buckling flooring",
];

const faqs = [
  {
    q: "How do I know if I have a hidden leak?",
    a: "Signs include unexplained increases in your water bill, damp spots on walls or ceilings, mold or mildew odors, and the sound of running water when nothing is on.",
  },
  {
    q: "Can a small drip really cause serious damage?",
    a: "Yes. A dripping faucet can waste thousands of gallons per year and cause water damage over time. Even small leaks under sinks can lead to cabinet rot and mold.",
  },
  {
    q: "Do you repair leaks in walls or ceilings?",
    a: "Yes. We locate and repair pipe leaks inside walls and ceilings. We work to minimize the opening needed to access the pipe and can patch drywall after the repair.",
  },
];

export default function LeakRepair() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
              Leak Repair{" "}
              <span className="text-brand-orange-400">Chicago</span>
            </h1>
            <p className="text-brand-navy-200 text-lg mb-6 leading-relaxed">
              Even a small leak can cause major damage if left unchecked. Dom finds and fixes leaks fast — before they turn into expensive water damage repairs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+17738669429"
                className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all shadow-brand-md"
              >
                <Phone className="h-5 w-5" />
                Call (773) 866-9429
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy-900 px-7 py-3.5 rounded-full font-bold text-base transition-all"
              >
                Free Quote
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/assets/generated/leak-repair-hero.dim_1200x600.png"
              alt="Plumber fixing a leaking pipe under a kitchen sink with water droplets visible and tools on floor"
              className="w-full rounded-2xl shadow-navy-lg object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Leak types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Leaks We Fix
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leakTypes.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-5 w-5 text-brand-orange-500 shrink-0" />
                  <h3 className="font-heading font-bold text-brand-navy-900">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Signs You Have a Leak
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {warningSigns.map((sign) => (
              <div key={sign} className="flex items-center gap-3 bg-brand-orange-50 rounded-xl p-4 border border-brand-orange-100">
                <AlertTriangle className="h-5 w-5 text-brand-orange-500 shrink-0" />
                <span className="text-brand-navy-800 font-medium text-sm">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Common Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-6 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/services/plumbing-sewer"
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 hover:shadow-brand-sm transition-all"
            >
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Plumbing & Sewer</h3>
              <p className="text-gray-500 text-sm">Full plumbing services</p>
            </Link>
            <Link
              to="/services/emergency-plumbing"
              className="bg-brand-orange-50 rounded-2xl p-5 border border-brand-orange-100 hover:border-brand-orange-300 hover:shadow-brand-sm transition-all"
            >
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Emergency Plumbing</h3>
              <p className="text-gray-500 text-sm">24/7 emergency response</p>
            </Link>
            <Link
              to="/services/drain-cleaning"
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 hover:shadow-brand-sm transition-all"
            >
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Drain Cleaning</h3>
              <p className="text-gray-500 text-sm">Professional drain clearing</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-black text-white mb-4">
            Suspect a Leak? Call Dom.
          </h2>
          <p className="text-brand-navy-200 mb-8">
            The sooner we find it, the less damage it causes. Free estimates, transparent pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17738669429"
              className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <Phone className="h-5 w-5" />
              (773) 866-9429
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy-900 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
