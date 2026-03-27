import { Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle, MapPin, Phone } from "lucide-react";

const services = [
  { name: "Emergency Plumbing", path: "/services/emergency-plumbing" },
  { name: "Plumbing & Sewer", path: "/services/plumbing-sewer" },
  { name: "Drain Cleaning", path: "/services/drain-cleaning" },
  { name: "Leak Repair", path: "/services/leak-repair" },
  { name: "Handyman Services", path: "/services/handyman" },
  { name: "Painting Services", path: "/services/painting" },
  { name: "Cleaning Services", path: "/services/cleaning" },
  { name: "Power Washing", path: "/services/power-washing" },
];

const faqs = [
  {
    q: "Are you really based in Dunning?",
    a: "Yes. We live and work in Dunning. When you call, you're getting a local neighbor who knows the neighborhood, the housing stock, and the common issues in this area.",
  },
  {
    q: "How fast can you respond to a Dunning emergency?",
    a: "Being based in Dunning means we can often respond to local emergencies faster than anyone else. Call (773) 866-9429 and we'll get to you as quickly as possible.",
  },
  {
    q: "Do you work on the older homes in Dunning?",
    a: "Absolutely. Many Dunning homes were built in the mid-20th century and have older plumbing systems. We have extensive experience with galvanized pipes, cast iron drains, and the other plumbing characteristics of older Chicago homes.",
  },
];

export default function Dunning() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-brand-orange-500/20 border border-brand-orange-500/40 text-brand-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <MapPin className="h-3.5 w-3.5" />
            Primary Service Area
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Handyman & Plumbing in{" "}
            <span className="text-brand-orange-400">Dunning, Chicago</span>
          </h1>
          <p className="text-brand-navy-200 text-lg mb-6">
            We're your neighbors. Based right here in Dunning with 15+ years of
            experience — available 24/7 for emergencies.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+17738669429"
              className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all"
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
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Services in Dunning
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link
                key={s.path}
                to={s.path as any}
                className="flex items-center gap-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-brand-orange-300 hover:shadow-brand-sm transition-all"
              >
                <CheckCircle className="h-4 w-4 text-brand-orange-500 shrink-0" />
                <span className="text-brand-navy-800 font-medium text-sm">
                  {s.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-brand-orange-50 border border-brand-orange-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-brand-orange-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-brand-navy-900">
                  Plumbing Emergency in Dunning?
                </h3>
                <p className="text-gray-600 text-sm">
                  We're available 24/7 and we're local — fastest response in the
                  neighborhood.
                </p>
              </div>
            </div>
            <a
              href="tel:+17738669429"
              className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shrink-0"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
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
              <div
                key={q}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
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
            Your Dunning Neighbor — Ready to Help
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Call now or get a free quote. We're right here in the neighborhood.
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
