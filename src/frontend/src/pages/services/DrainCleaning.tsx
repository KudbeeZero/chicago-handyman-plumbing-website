import { Link } from "@tanstack/react-router";
import { CheckCircle, Clock, Droplets, Phone } from "lucide-react";

const drainTypes = [
  "Kitchen sink drains",
  "Bathroom sink & tub drains",
  "Toilet clogs",
  "Floor drains",
  "Laundry drains",
  "Main sewer line clogs",
];

const process = [
  {
    step: "1",
    title: "Diagnose",
    desc: "We assess the clog type and location before starting.",
  },
  {
    step: "2",
    title: "Snake or Jet",
    desc: "We use a drain snake or hydro-jet depending on severity.",
  },
  {
    step: "3",
    title: "Clear & Test",
    desc: "We clear the blockage and run water to confirm flow.",
  },
  {
    step: "4",
    title: "Advise",
    desc: "We tell you what caused it and how to prevent it.",
  },
];

export default function DrainCleaning() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
              Drain Cleaning{" "}
              <span className="text-brand-orange-400">Chicago</span>
            </h1>
            <p className="text-brand-navy-200 text-lg mb-6 leading-relaxed">
              Slow drains and stubborn clogs are no match for Dom's professional
              drain cleaning service. We snake, jet, and clear drains throughout
              Chicago's Northwest Side.
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
              src="/assets/generated/drain-cleaning-hero.dim_1200x600.png"
              alt="Plumber snaking a clogged kitchen drain in a Chicago home with water visible in sink"
              className="w-full rounded-2xl shadow-navy-lg object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Drain types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Drains We Clean
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {drainTypes.map((d) => (
              <div
                key={d}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <Droplets className="h-5 w-5 text-brand-orange-500 shrink-0" />
                <span className="text-brand-navy-800 font-medium">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-brand-orange-500 text-white rounded-full flex items-center justify-center font-heading font-black text-xl mx-auto mb-3">
                  {step}
                </div>
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-black text-white mb-4">
            Clogged Drain? We'll Fix It Today.
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Same-day drain cleaning available throughout Chicago's Northwest
            Side.
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
