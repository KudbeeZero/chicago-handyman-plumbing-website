import { Link } from "@tanstack/react-router";
import { Phone, CheckCircle, AlertTriangle } from "lucide-react";

const pricingTiers = [
  {
    name: "Small Jobs",
    price: "$75–$150",
    desc: "Quick fixes and minor repairs",
    features: [
      "Faucet repair or replacement",
      "Toilet flapper/handle fix",
      "Minor drywall patch",
      "Door hinge adjustment",
      "Caulking & weatherstripping",
    ],
    cta: "Get Quote",
    highlight: false,
  },
  {
    name: "Mid-Size Jobs",
    price: "$150–$400",
    desc: "Standard repairs and installations",
    features: [
      "Drain cleaning (snake)",
      "Toilet replacement",
      "Garbage disposal install",
      "Interior painting (1 room)",
      "Drywall repair (large)",
      "Door/window replacement",
    ],
    cta: "Get Quote",
    highlight: true,
  },
  {
    name: "Large Projects",
    price: "$400+",
    desc: "Major repairs and full projects",
    features: [
      "Sewer line repair",
      "Water heater replacement",
      "Full bathroom plumbing",
      "Multi-room painting",
      "Power washing (full home)",
      "Move-out deep cleaning",
    ],
    cta: "Get Quote",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Transparent <span className="text-brand-orange-400">Pricing</span>
          </h1>
          <p className="text-brand-navy-200 text-lg">
            No hidden fees. No surprise charges. Just honest pricing for quality work.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border-2 transition-all ${
                  tier.highlight
                    ? "bg-brand-navy-900 border-brand-orange-500 shadow-brand-lg"
                    : "bg-white border-gray-200 shadow-navy-sm"
                }`}
              >
                {tier.highlight && (
                  <div className="bg-brand-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`font-heading font-black text-2xl mb-1 ${
                    tier.highlight ? "text-white" : "text-brand-navy-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <div
                  className={`text-3xl font-heading font-black mb-1 ${
                    tier.highlight ? "text-brand-orange-400" : "text-brand-orange-500"
                  }`}
                >
                  {tier.price}
                </div>
                <p
                  className={`text-sm mb-6 ${
                    tier.highlight ? "text-brand-navy-300" : "text-gray-500"
                  }`}
                >
                  {tier.desc}
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          tier.highlight ? "text-brand-orange-400" : "text-brand-orange-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.highlight ? "text-brand-navy-200" : "text-gray-600"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-bold text-sm transition-all ${
                    tier.highlight
                      ? "bg-brand-orange-500 hover:bg-brand-orange-600 text-white"
                      : "border-2 border-brand-orange-500 text-brand-orange-500 hover:bg-brand-orange-500 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency pricing note */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-brand-orange-50 border border-brand-orange-200 rounded-2xl p-6 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-brand-orange-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-brand-navy-900 mb-2">
                Emergency Service Pricing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Emergency plumbing calls (nights, weekends, holidays) may include an after-hours surcharge. We'll always tell you the price before starting any work. Call us now for an immediate quote.
              </p>
              <a
                href="tel:+17738669429"
                className="inline-flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm mt-4 transition-all"
              >
                <Phone className="h-4 w-4" />
                Call for Emergency Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
