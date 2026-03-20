import { Link } from "@tanstack/react-router";
import { Phone, Calendar, CheckCircle, Snowflake, AlertTriangle } from "lucide-react";

const vulnerableLocations = [
  "Pipes in exterior walls",
  "Pipes in unheated basements or crawl spaces",
  "Pipes in unheated garages",
  "Outdoor hose bibs and irrigation lines",
  "Pipes near drafty windows or doors",
  "Pipes in attics with poor insulation",
];

const preventionTips = [
  { title: "Insulate Exposed Pipes", desc: "Wrap pipes in unheated spaces with foam pipe insulation. It's inexpensive and can prevent costly burst pipes." },
  { title: "Know Your Shut-Off Valve", desc: "Know exactly where your main water shut-off valve is before an emergency. In most Chicago homes, it's in the basement near the water meter." },
  { title: "Keep Heat Above 55°F", desc: "Even when you're away, keep your home heated above 55°F. The cost of heating is far less than the cost of burst pipe repairs." },
  { title: "Open Cabinet Doors", desc: "During extreme cold snaps, open cabinet doors under sinks on exterior walls to allow warm air to circulate around pipes." },
  { title: "Disconnect Outdoor Hoses", desc: "Disconnect and drain all outdoor hoses before the first freeze. A connected hose can cause the faucet and connected pipe to freeze." },
  { title: "Let Faucets Drip", desc: "During extreme cold, let faucets served by exposed pipes drip slightly. Moving water is less likely to freeze." },
];

const faqs = [
  {
    q: "At what temperature do pipes freeze?",
    a: "Pipes can begin to freeze when outdoor temperatures drop below 20°F, especially if they're in unheated spaces or exterior walls. Chicago regularly sees temperatures well below this threshold.",
  },
  {
    q: "What should I do if my pipes freeze?",
    a: "First, shut off the main water supply. Then call us immediately. Do not use an open flame to thaw pipes — this is a fire hazard. We have safe methods to thaw frozen pipes.",
  },
  {
    q: "How do I know if a pipe has burst?",
    a: "Signs include no water flow when you turn on a faucet, visible water damage, or the sound of rushing water. If you suspect a burst pipe, shut off the main water supply immediately and call (773) 866-9429.",
  },
];

export default function WinterPlumbing() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-orange-500/20 border border-brand-orange-500/40 text-brand-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
              Seasonal Tips
            </span>
            <div className="flex items-center gap-1 text-brand-navy-400 text-xs">
              <Calendar className="h-3 w-3" />
              September 30, 2024
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Preparing Your Home for Chicago Winter Plumbing Issues
          </h1>
          <p className="text-brand-navy-200 text-lg">
            Chicago winters are brutal on pipes. Learn how to prevent frozen pipes, protect vulnerable plumbing, and what to do if disaster strikes.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Chicago winters are no joke. When temperatures plunge below zero — as they regularly do — your home's plumbing is under serious stress. Frozen pipes are one of the most common and costly winter home emergencies. A single burst pipe can release hundreds of gallons of water and cause thousands of dollars in damage. The good news: most frozen pipe emergencies are preventable.
          </p>

          {/* Vulnerable locations */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">
            Where Pipes Are Most Vulnerable
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {vulnerableLocations.map((loc) => (
              <div key={loc} className="flex items-center gap-3 bg-brand-navy-50 rounded-xl p-4 border border-brand-navy-100">
                <Snowflake className="h-5 w-5 text-brand-navy-600 shrink-0" />
                <span className="text-brand-navy-800 font-medium text-sm">{loc}</span>
              </div>
            ))}
          </div>

          {/* Prevention tips */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">
            Prevention Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {preventionTips.map(({ title, desc }) => (
              <div key={title} className="bg-brand-orange-50 rounded-2xl p-5 border border-brand-orange-100">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-brand-orange-500 shrink-0" />
                  <h3 className="font-heading font-bold text-brand-navy-900">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="bg-brand-orange-500 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-white shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-black text-white text-lg">Pipe Burst? Call Immediately.</h3>
                <p className="text-orange-100 text-sm">We respond 24/7 to winter plumbing emergencies in Chicago.</p>
              </div>
            </div>
            <a
              href="tel:+17738669429"
              className="flex items-center gap-2 bg-white text-brand-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-bold text-sm transition-all shrink-0"
            >
              <Phone className="h-4 w-4" />
              (773) 866-9429
            </a>
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
              <h3 className="font-heading font-black text-white text-xl">Prepare Before Winter Hits</h3>
              <p className="text-brand-navy-300 text-sm mt-1">Call Dom to winterize your plumbing before the cold arrives.</p>
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
