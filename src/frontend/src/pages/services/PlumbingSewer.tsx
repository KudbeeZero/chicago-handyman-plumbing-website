import { Link } from "@tanstack/react-router";
import { CheckCircle, Phone, Shield, Zap } from "lucide-react";

const services = [
  "Water line repair & replacement",
  "Sewer line repair & replacement",
  "Water heater installation",
  "Pipe leak repair",
  "Toilet installation",
  "Faucet & fixture installation",
  "Garbage disposal install",
  "Sump pump repair & replacement",
];

const faqs = [
  {
    q: "How do I know if I have a sewer line problem?",
    a: "Multiple drains backing up at once, gurgling sounds, sewage odors, and wet spots in the yard are all signs of a sewer line issue. Call us for a diagnosis.",
  },
  {
    q: "How long does sewer line repair take?",
    a: "Minor repairs can be done in a few hours. Full sewer line replacement typically takes 1–2 days depending on the length and access.",
  },
  {
    q: "Do you replace water heaters?",
    a: "Yes. We install and replace both traditional tank and tankless water heaters. We'll help you choose the right unit for your home and budget.",
  },
];

export default function PlumbingSewer() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
              Plumbing & Sewer{" "}
              <span className="text-brand-orange-400">Chicago</span>
            </h1>
            <p className="text-brand-navy-200 text-lg mb-6 leading-relaxed">
              Full-service plumbing and sewer repair for Chicago homes. From
              water heater replacement to sewer line repair — done right, with
              transparent pricing.
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
              src="/assets/generated/plumbing-sewer-hero.dim_1200x600.png"
              alt="Plumber working on sewer line with Chicago bungalow exterior visible in background"
              className="w-full rounded-2xl shadow-navy-lg object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Plumbing Services We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-brand-orange-500 shrink-0" />
                <span className="text-brand-navy-800 font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-brand-orange-50 rounded-2xl border border-brand-orange-100">
              <Zap className="h-10 w-10 text-brand-orange-500 mx-auto mb-3" />
              <div className="font-heading font-black text-brand-navy-900 text-lg">
                Fast Response
              </div>
              <div className="text-gray-500 text-sm">
                Same-day service available
              </div>
            </div>
            <div className="text-center p-6 bg-brand-navy-50 rounded-2xl border border-brand-navy-100">
              <Shield className="h-10 w-10 text-brand-navy-600 mx-auto mb-3" />
              <div className="font-heading font-black text-brand-navy-900 text-lg">
                Licensed & Insured
              </div>
              <div className="text-gray-500 text-sm">Illinois Certified</div>
            </div>
            <div className="text-center p-6 bg-brand-orange-50 rounded-2xl border border-brand-orange-100">
              <CheckCircle className="h-10 w-10 text-brand-orange-500 mx-auto mb-3" />
              <div className="font-heading font-black text-brand-navy-900 text-lg">
                Upfront Pricing
              </div>
              <div className="text-gray-500 text-sm">No hidden fees ever</div>
            </div>
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
            Need a Plumber? Call Dom.
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Free estimates, transparent pricing, and quality work guaranteed.
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
