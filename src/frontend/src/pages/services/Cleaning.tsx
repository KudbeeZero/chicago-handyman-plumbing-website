import { Link } from "@tanstack/react-router";
import { CheckCircle, Phone, Sparkles } from "lucide-react";

const cleaningServices = [
  "Move-out deep cleaning",
  "Move-in cleaning",
  "Kitchen deep clean",
  "Bathroom scrub & sanitize",
  "Appliance cleaning",
  "Window & blind cleaning",
  "Baseboard & trim cleaning",
  "Carpet vacuuming",
];

const faqs = [
  {
    q: "What's included in a move-out cleaning?",
    a: "Our move-out cleaning covers all rooms, kitchen appliances, bathrooms, windows, baseboards, and floors. We aim to get your security deposit back.",
  },
  {
    q: "How long does a deep cleaning take?",
    a: "A standard apartment takes 3–5 hours. Larger homes may take a full day. We'll give you a time estimate when you call.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes. We bring all cleaning supplies and equipment. Just let us know if you have any preferences for specific products.",
  },
];

export default function Cleaning() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
              Cleaning Services{" "}
              <span className="text-brand-orange-400">Chicago</span>
            </h1>
            <p className="text-brand-navy-200 text-lg mb-6 leading-relaxed">
              Move-in/move-out and deep cleaning for Chicago apartments and
              homes. Thorough, reliable, and affordable — done right the first
              time.
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
              src="/assets/generated/cleaning-hero.dim_1200x600.png"
              alt="Move-out cleaning of a Chicago apartment with person wiping counters and vacuuming in a bright and clean space"
              className="w-full rounded-2xl shadow-navy-lg object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            What We Clean
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cleaningServices.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <Sparkles className="h-5 w-5 text-brand-orange-500 shrink-0" />
                <span className="text-brand-navy-800 font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Common Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">
                  {q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-black text-white mb-4">
            Need a Deep Clean? Call Dom.
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Move-in, move-out, or just a thorough deep clean — we've got you
            covered.
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
