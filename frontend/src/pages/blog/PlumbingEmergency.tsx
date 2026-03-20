import { Link } from "@tanstack/react-router";
import { Phone, Calendar, CheckCircle } from "lucide-react";

const faqs = [
  {
    q: "What should I do first in a plumbing emergency?",
    a: "Locate and turn off your main water shut-off valve immediately. This stops water flow and limits damage. Then call (773) 866-9429 for emergency plumbing service.",
  },
  {
    q: "Where is the main water shut-off valve in a Chicago home?",
    a: "In most Chicago homes, the main shut-off valve is in the basement near the front of the house, close to the water meter. It's usually a gate valve (round wheel) or ball valve (lever handle).",
  },
  {
    q: "Can I use my plumbing during a sewer backup?",
    a: "No. Stop using all water immediately during a sewer backup. Running water will make the backup worse. Call (773) 866-9429 right away.",
  },
];

const steps = [
  {
    num: "1",
    title: "Don't Panic — Act Fast",
    desc: "Stay calm and act quickly. Water damage compounds rapidly. A burst pipe can release hundreds of gallons per hour. Every second counts.",
  },
  {
    num: "2",
    title: "Shut Off the Water",
    desc: "For most emergencies involving water flow, shut off the water supply. Use the local shut-off under the fixture, or the main shut-off in your basement near the water meter.",
  },
  {
    num: "3",
    title: "Call a Professional Immediately",
    desc: "Once the water is off, call a professional plumber immediately. We provide 24/7 emergency plumbing service throughout Chicago and the northwest suburbs.",
  },
  {
    num: "4",
    title: "Minimize Damage While You Wait",
    desc: "Move valuables away from the affected area, place towels or buckets to catch dripping water, and take photos of the damage for your records.",
  },
];

export default function PlumbingEmergency() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-orange-500/20 border border-brand-orange-500/40 text-brand-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
              Emergency Plumbing
            </span>
            <div className="flex items-center gap-1 text-brand-navy-400 text-xs">
              <Calendar className="h-3 w-3" />
              January 15, 2026
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            What to Do During a Plumbing Emergency in Chicago
          </h1>
          <p className="text-brand-navy-200 text-lg">
            A step-by-step guide for Chicago homeowners — from the first sign of trouble to getting professional help fast.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            It's 11PM on a Tuesday and you hear water rushing somewhere in your Chicago home. Or you wake up to find your basement floor drain backing up. Plumbing emergencies are stressful and potentially very expensive — but knowing what to do in the first few minutes can make a significant difference in how much damage you end up dealing with.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-6 mb-10">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-brand-orange-500 text-white rounded-full flex items-center justify-center font-heading font-black text-lg shrink-0">
                  {num}
                </div>
                <div>
                  <h2 className="text-xl font-heading font-black text-brand-navy-900 mb-2">{title}</h2>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="bg-brand-orange-500 rounded-2xl p-8 text-center mb-10">
            <h3 className="text-2xl font-heading font-black text-white mb-2">
              Plumbing Emergency Right Now?
            </h3>
            <p className="text-orange-100 text-sm mb-4">
              Call us immediately — available 24/7 in Chicago.
            </p>
            <a
              href="tel:+17738669429"
              className="inline-flex items-center gap-2 bg-white text-brand-orange-600 hover:bg-orange-50 px-8 py-3.5 rounded-full font-bold text-lg transition-all"
            >
              <Phone className="h-5 w-5" />
              (773) 866-9429
            </a>
          </div>

          {/* Common emergencies */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">
            Common Chicago Plumbing Emergencies
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "Burst Pipes (Winter)", desc: "Chicago winters regularly push temperatures below zero. Pipes in exterior walls and unheated spaces are vulnerable. Shut off the main and call immediately." },
              { title: "Sewer Backups (Spring)", desc: "Heavy spring rains can overwhelm Chicago's combined sewer system. If multiple drains are backing up simultaneously, stop using all water and call for emergency service." },
              { title: "Overflowing Toilets", desc: "If your toilet won't stop overflowing, remove the tank lid and push the flapper down to stop water flow. Then call us." },
              { title: "Water Heater Failure", desc: "A leaking or failed water heater can flood your utility room quickly. Shut off the cold water supply to the heater and call us." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4 mb-10">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <Link to="/services/emergency-plumbing" className="bg-brand-orange-50 rounded-2xl p-5 border border-brand-orange-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Emergency Plumbing</h3>
              <p className="text-gray-500 text-sm">24/7 emergency response</p>
            </Link>
            <Link to="/services/plumbing-sewer" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Plumbing & Sewer</h3>
              <p className="text-gray-500 text-sm">Full plumbing services</p>
            </Link>
            <Link to="/services/leak-repair" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Leak Repair</h3>
              <p className="text-gray-500 text-sm">Find and fix leaks fast</p>
            </Link>
          </div>

          {/* Final CTA */}
          <div className="bg-brand-navy-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-black text-white text-xl">Ready to Get Help?</h3>
              <p className="text-brand-navy-300 text-sm mt-1">Call now or request a quote — we respond fast.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+17738669429"
                className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all"
              >
                <Phone className="h-4 w-4" />
                (773) 866-9429
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy-900 px-6 py-3 rounded-full font-bold transition-all"
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
