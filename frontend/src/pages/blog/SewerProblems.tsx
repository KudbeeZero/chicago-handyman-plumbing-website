import { Link } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";

const faqs = [
  {
    q: "How do I know if I have a sewer problem?",
    a: "Signs include multiple drains backing up simultaneously, gurgling sounds from drains, sewage odors in your home, slow drains throughout the house, and water backing up in your basement floor drain.",
  },
  {
    q: "Can tree roots really get into my sewer line?",
    a: "Yes. Tree roots are one of the most common causes of sewer line problems in older Chicago neighborhoods. Roots seek out moisture and can infiltrate even small cracks in clay or cast iron pipes.",
  },
  {
    q: "How often should I have my sewer line cleaned?",
    a: "For older Chicago homes with mature trees nearby, annual sewer line cleaning is a good preventive measure. If you've had backups before, more frequent cleaning may be warranted.",
  },
];

const problems = [
  {
    title: "Tree Root Intrusion",
    desc: "Chicago's mature street trees have extensive root systems that seek out moisture — and your sewer line is full of it. Roots enter through cracks in clay tile joints and grow until they block the pipe entirely.",
  },
  {
    title: "Pipe Deterioration and Collapse",
    desc: "Clay tile pipes don't last forever. After decades of use, joints can separate, sections can crack, and in severe cases, sections can collapse entirely — requiring immediate attention.",
  },
  {
    title: "Grease and Debris Buildup",
    desc: "In older homes with rough, corroded cast iron drain pipes, grease and debris accumulate much faster. Kitchen grease, soap scum, and food particles stick to the rough interior surface and build up over time.",
  },
  {
    title: "Combined Sewer Overflows",
    desc: "Chicago has a combined sewer system — stormwater and sewage share the same pipes. During heavy rain events, this system can become overwhelmed, causing sewage to back up into homes.",
  },
];

export default function SewerProblems() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-orange-500/20 border border-brand-orange-500/40 text-brand-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
              Plumbing & Sewer
            </span>
            <div className="flex items-center gap-1 text-brand-navy-400 text-xs">
              <Calendar className="h-3 w-3" />
              January 22, 2026
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Common Sewer Problems in Older Chicago Homes
          </h1>
          <p className="text-brand-navy-200 text-lg">
            Chicago's vintage housing stock is full of character — and aging sewer infrastructure. Here's what to watch for.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Chicago is a city of neighborhoods defined by bungalows, two-flats, and greystones built in the early-to-mid 20th century. These homes have tremendous character and are built to last. But their sewer systems? The clay tile and cast iron pipes that were standard when these homes were built are now 60, 70, even 100 years old — and they're showing their age.
          </p>

          {/* Problems */}
          <div className="flex flex-col gap-6 mb-10">
            {problems.map(({ title, desc }, i) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-orange-500 text-white rounded-full flex items-center justify-center font-heading font-black text-sm shrink-0">
                    {i + 1}
                  </div>
                  <h2 className="text-xl font-heading font-black text-brand-navy-900">{title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Prevention */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">
            What You Can Do
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "Annual Drain Cleaning", desc: "Have your main sewer line cleaned annually, especially if you have mature trees near your sewer line. Prevention is far cheaper than emergency service." },
              { title: "Watch for Warning Signs", desc: "Multiple slow drains, gurgling sounds, sewage odors, and recurring backups are all signs of a developing sewer problem. Address them early." },
              { title: "Avoid Grease Down the Drain", desc: "Never pour cooking grease down the drain. Let it cool and dispose of it in the trash. This is the single most effective thing you can do to prevent kitchen drain clogs." },
              { title: "Call Early", desc: "If you notice warning signs, call us before it becomes an emergency. Early intervention is almost always less expensive than emergency service." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-orange-50 rounded-2xl p-5 border border-brand-orange-100">
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
            <Link to="/services/plumbing-sewer" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Plumbing & Sewer</h3>
              <p className="text-gray-500 text-sm">Full plumbing services</p>
            </Link>
            <Link to="/services/drain-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Drain Cleaning</h3>
              <p className="text-gray-500 text-sm">Professional drain clearing</p>
            </Link>
            <Link to="/services/emergency-plumbing" className="bg-brand-orange-50 rounded-2xl p-5 border border-brand-orange-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Emergency Plumbing</h3>
              <p className="text-gray-500 text-sm">24/7 emergency response</p>
            </Link>
          </div>

          {/* Final CTA */}
          <div className="bg-brand-navy-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-black text-white text-xl">Concerned About Your Sewer?</h3>
              <p className="text-brand-navy-300 text-sm mt-1">Call Dom for an honest assessment — no obligation.</p>
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
