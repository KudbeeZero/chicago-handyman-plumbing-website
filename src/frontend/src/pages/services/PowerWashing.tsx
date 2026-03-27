import { Link } from "@tanstack/react-router";
import { CheckCircle, Phone, Wind } from "lucide-react";

const surfaces = [
  "Concrete driveways & sidewalks",
  "Brick & stone facades",
  "Wood & composite decks",
  "Vinyl & aluminum siding",
  "Fences & gates",
  "Patios & walkways",
  "Garage floors",
  "Gutters & downspouts",
];

const faqs = [
  {
    q: "Is power washing safe for all surfaces?",
    a: "Not all surfaces can handle high-pressure washing. We assess each surface and adjust pressure accordingly. Delicate surfaces like older brick or painted wood get soft-wash treatment.",
  },
  {
    q: "When is the best time to power wash in Chicago?",
    a: "Spring and fall are ideal — spring to remove winter grime, fall to prep surfaces before winter. We work year-round when temperatures are above freezing.",
  },
  {
    q: "How long does power washing take?",
    a: "A standard driveway takes 1–2 hours. Full home exterior washing typically takes a half to full day depending on size.",
  },
];

export default function PowerWashing() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
              Power Washing{" "}
              <span className="text-brand-orange-400">Chicago</span>
            </h1>
            <p className="text-brand-navy-200 text-lg mb-6 leading-relaxed">
              Restore your Chicago home's curb appeal with professional power
              washing. Driveways, siding, decks, fences, and more — cleaned fast
              and thoroughly.
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
              src="/assets/generated/power-washing-hero.dim_1200x600.png"
              alt="Power washing a concrete driveway and brick facade of a Chicago bungalow with water spray visible"
              className="w-full rounded-2xl shadow-navy-lg object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Surfaces We Clean
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {surfaces.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <Wind className="h-5 w-5 text-brand-orange-500 shrink-0" />
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
            Ready to Restore Your Home's Curb Appeal?
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Call for a free power washing quote — serving Chicago's Northwest
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
