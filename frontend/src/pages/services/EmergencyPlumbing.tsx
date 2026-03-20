import { Link } from "@tanstack/react-router";
import { Phone, Clock, Shield, CheckCircle, AlertTriangle } from "lucide-react";

const features = [
  "Burst pipe repair",
  "Flooding & water damage response",
  "Sewage backup clearing",
  "No hot water emergencies",
  "Gas line concerns",
  "Frozen pipe thawing",
];

const faqs = [
  {
    q: "How fast can you respond to a plumbing emergency?",
    a: "We aim to arrive within 60–90 minutes for most Northwest Side Chicago locations.",
  },
  {
    q: "Do you charge extra for after-hours emergency calls?",
    a: "After-hours calls may include a surcharge, which we always disclose before starting work.",
  },
  {
    q: "What should I do while waiting for the plumber?",
    a: "Shut off the main water valve, avoid using drains if there's a sewage backup, and call us immediately.",
  },
];

export default function EmergencyPlumbing() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange-500/20 border border-brand-orange-500/40 text-brand-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Clock className="h-3.5 w-3.5" />
              Available 24/7 — 365 Days a Year
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
              Emergency Plumbing{" "}
              <span className="text-brand-orange-400">Chicago</span>
            </h1>
            <p className="text-brand-navy-200 text-lg mb-6 leading-relaxed">
              Burst pipe? Flooding? Sewage backup? Dom responds fast — 24 hours a day, 7 days a week, 365 days a year. No answering machines, no waiting.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+17738669429"
                className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all shadow-brand-md"
              >
                <Phone className="h-5 w-5" />
                Call Now — (773) 866-9429
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
              src="/assets/generated/emergency-plumbing-hero.dim_1200x600.png"
              alt="24/7 emergency plumber arriving at a Chicago home at night with tools and flashlight"
              className="w-full rounded-2xl shadow-navy-lg object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            What We Handle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <CheckCircle className="h-5 w-5 text-brand-orange-500 shrink-0" />
                <span className="text-brand-navy-800 font-medium">{f}</span>
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
              <Clock className="h-10 w-10 text-brand-orange-500 mx-auto mb-3" />
              <div className="font-heading font-black text-brand-navy-900 text-lg">60–90 Min</div>
              <div className="text-gray-500 text-sm">Average Response Time</div>
            </div>
            <div className="text-center p-6 bg-brand-navy-50 rounded-2xl border border-brand-navy-100">
              <Shield className="h-10 w-10 text-brand-navy-600 mx-auto mb-3" />
              <div className="font-heading font-black text-brand-navy-900 text-lg">Licensed & Insured</div>
              <div className="text-gray-500 text-sm">Illinois Certified</div>
            </div>
            <div className="text-center p-6 bg-brand-orange-50 rounded-2xl border border-brand-orange-100">
              <AlertTriangle className="h-10 w-10 text-brand-orange-500 mx-auto mb-3" />
              <div className="font-heading font-black text-brand-navy-900 text-lg">24/7/365</div>
              <div className="text-gray-500 text-sm">Always Available</div>
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
              <div key={q} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">{q}</h3>
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
            Plumbing Emergency? Call Now.
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Don't wait — every minute counts with a plumbing emergency. Dom answers 24/7.
          </p>
          <a
            href="tel:+17738669429"
            className="inline-flex items-center gap-3 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-4 rounded-full font-black text-xl transition-all shadow-brand-lg"
          >
            <Phone className="h-6 w-6" />
            (773) 866-9429
          </a>
        </div>
      </section>
    </main>
  );
}
