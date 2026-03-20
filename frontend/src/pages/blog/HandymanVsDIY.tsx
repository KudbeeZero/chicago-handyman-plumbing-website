import { Link } from "@tanstack/react-router";
import { Phone, Calendar, CheckCircle, XCircle } from "lucide-react";

const faqs = [
  {
    q: "How do I know if a repair is beyond my DIY skill level?",
    a: "If the repair involves your home's main plumbing lines, electrical systems, structural elements, or requires permits, it's generally best to call a professional. When in doubt, a quick call can help you assess the situation.",
  },
  {
    q: "Is it cheaper to DIY or hire a handyman?",
    a: "It depends on the job. For simple tasks you're comfortable with, DIY saves money. But for jobs that require specialized tools or expertise, a professional is often more economical in the long run.",
  },
  {
    q: "What happens if I make a DIY plumbing mistake?",
    a: "DIY plumbing mistakes can range from minor to major. Plumbing errors can also void home warranties or create code violations. For anything beyond basic fixture replacement, call a professional.",
  },
];

const grayZone = [
  {
    title: "Faucet Replacement",
    diy: "If you're comfortable with basic plumbing and the shut-off valves work, replacing a faucet is a reasonable DIY project.",
    pro: "If the shut-off valves are old and corroded, or if you discover additional issues, call a professional.",
  },
  {
    title: "Toilet Installation",
    diy: "Replacing a toilet is manageable for a confident DIYer with the right tools.",
    pro: "If the flange is damaged or the floor has water damage, professional help is warranted.",
  },
  {
    title: "Drywall Patching",
    diy: "Small patches (under 6 inches) are reasonable DIY projects.",
    pro: "Large holes, water-damaged drywall, or patches that need to be invisible for painting are better left to professionals.",
  },
];

export default function HandymanVsDIY() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-orange-500/20 border border-brand-orange-500/40 text-brand-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
              Handyman Tips
            </span>
            <div className="flex items-center gap-1 text-brand-navy-400 text-xs">
              <Calendar className="h-3 w-3" />
              February 10, 2026
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            When to Call a Handyman vs DIY
          </h1>
          <p className="text-brand-navy-200 text-lg">
            Knowing the difference can save you time, money, and a lot of headaches.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Every Chicago homeowner faces the same question at some point: should I try to fix this myself, or should I call someone? The answer isn't always obvious. DIY can save money and give you a sense of accomplishment. But the wrong DIY attempt can turn a $100 repair into a $1,000 disaster.
          </p>

          {/* DIY OK */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">The Case for DIY</h2>
          <p className="text-gray-700 mb-4">
            There's a real category of home repairs that most handy homeowners can tackle safely and effectively — low-risk tasks that don't require specialized tools or permits.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Replacing a light switch or outlet cover",
              "Patching small nail holes in drywall",
              "Replacing a toilet flapper or handle",
              "Unclogging a drain with a plunger",
              "Replacing a showerhead",
              "Painting a room",
              "Assembling furniture",
              "Installing a ceiling fan (if comfortable with basic wiring)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-green-50 rounded-xl p-3 border border-green-100">
                <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Call a Pro */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">When to Call a Professional</h2>
          <p className="text-gray-700 mb-4">
            There's an equally clear category of repairs where DIY is a bad idea — either because the risk of making things worse is high, or because specialized tools or knowledge are required.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Any work on main water supply lines",
              "Sewer line repairs or clearing",
              "Burst pipe repair",
              "Significant drywall repair (large holes, water damage)",
              "Anything requiring a permit",
              "Electrical panel work",
              "Gas line work",
              "Structural repairs",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-red-50 rounded-xl p-3 border border-red-100">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Gray zone */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">The Gray Zone: When It Depends</h2>
          <div className="flex flex-col gap-4 mb-8">
            {grayZone.map(({ title, diy, pro }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-heading font-bold text-brand-navy-900 mb-3">{title}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700"><strong>DIY OK:</strong> {diy}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-brand-orange-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700"><strong>Call a Pro:</strong> {pro}</p>
                  </div>
                </div>
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
            <Link to="/services/handyman" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Handyman Services</h3>
              <p className="text-gray-500 text-sm">Professional home repairs</p>
            </Link>
            <Link to="/services/plumbing-sewer" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Plumbing Services</h3>
              <p className="text-gray-500 text-sm">Full plumbing repairs</p>
            </Link>
            <Link to="/pricing" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">Pricing</h3>
              <p className="text-gray-500 text-sm">Transparent, upfront pricing</p>
            </Link>
          </div>

          {/* Final CTA */}
          <div className="bg-brand-navy-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-black text-white text-xl">Not Sure? Just Call.</h3>
              <p className="text-brand-navy-300 text-sm mt-1">We'll give you an honest assessment — no obligation.</p>
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
