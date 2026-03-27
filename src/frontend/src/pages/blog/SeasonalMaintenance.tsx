import { Link } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle,
  Cloud,
  Leaf,
  Phone,
  Snowflake,
  Sun,
} from "lucide-react";

const seasons = [
  {
    name: "Spring",
    icon: Cloud,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    tasks: [
      "Inspect roof for winter damage",
      "Clean gutters and downspouts",
      "Check sump pump operation",
      "Inspect exterior caulking and weatherstripping",
      "Flush water heater to remove sediment",
      "Check outdoor faucets for freeze damage",
      "Inspect basement for water intrusion",
      "Service HVAC system before cooling season",
    ],
  },
  {
    name: "Summer",
    icon: Sun,
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50",
    border: "border-brand-orange-100",
    tasks: [
      "Power wash siding, driveway, and deck",
      "Inspect and repair deck or patio",
      "Check window and door screens",
      "Trim trees and shrubs away from house",
      "Inspect and clean dryer vent",
      "Test smoke and carbon monoxide detectors",
      "Check attic ventilation",
      "Inspect foundation for cracks",
    ],
  },
  {
    name: "Fall",
    icon: Leaf,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    tasks: [
      "Clean gutters after leaves fall",
      "Disconnect and drain outdoor hoses",
      "Shut off and drain outdoor faucets",
      "Service furnace before heating season",
      "Inspect chimney and fireplace",
      "Seal gaps around windows and doors",
      "Check insulation in attic and crawl spaces",
      "Have sewer line cleaned if trees are nearby",
    ],
  },
  {
    name: "Winter",
    icon: Snowflake,
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50",
    border: "border-brand-navy-100",
    tasks: [
      "Know where your main water shut-off is",
      "Insulate pipes in unheated spaces",
      "Keep cabinet doors open in cold snaps",
      "Maintain heat above 55°F even when away",
      "Check for ice dams on roof",
      "Keep garage door closed if pipes run through it",
      "Have emergency plumber's number ready",
      "Check sump pump before spring thaw",
    ],
  },
];

const faqs = [
  {
    q: "What's the most important seasonal maintenance task for Chicago homeowners?",
    a: "Winterizing your plumbing is critical in Chicago. Knowing where your main shut-off valve is and insulating exposed pipes can prevent costly burst pipe emergencies.",
  },
  {
    q: "How often should I have my gutters cleaned?",
    a: "At minimum, clean gutters in late fall after leaves have dropped. If you have many trees, a spring cleaning is also recommended to clear debris from winter storms.",
  },
  {
    q: "Should I have my sewer line cleaned every year?",
    a: "For older Chicago homes with mature trees nearby, annual sewer line cleaning is a smart preventive measure. It's far cheaper than dealing with a backup.",
  },
];

export default function SeasonalMaintenance() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-orange-500/20 border border-brand-orange-500/40 text-brand-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
              Home Maintenance
            </span>
            <div className="flex items-center gap-1 text-brand-navy-400 text-xs">
              <Calendar className="h-3 w-3" />
              November 5, 2024
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Seasonal Home Maintenance Checklist for Chicago
          </h1>
          <p className="text-brand-navy-200 text-lg">
            Chicago's extreme seasons demand year-round home maintenance. This
            checklist covers spring, summer, fall, and winter tasks to keep your
            home in top shape.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Chicago homeowners face unique challenges. Temperatures swing from
            -20°F in winter to 95°F in summer. Spring brings heavy rains that
            test sewer systems. Fall means leaves clogging gutters. Staying
            ahead of seasonal maintenance is the best way to protect your home
            and avoid expensive emergency repairs.
          </p>

          {/* Season checklists */}
          <div className="flex flex-col gap-8 mb-10">
            {seasons.map(({ name, icon: Icon, color, bg, border, tasks }) => (
              <div
                key={name}
                className={`${bg} rounded-2xl p-6 border ${border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${bg} rounded-xl p-2 border ${border}`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h2 className="text-2xl font-heading font-black text-brand-navy-900">
                    {name} Checklist
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {tasks.map((task) => (
                    <div key={task} className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-4 w-4 ${color} shrink-0 mt-0.5`}
                      />
                      <span className="text-gray-700 text-sm">{task}</span>
                    </div>
                  ))}
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
              <div
                key={q}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">
                  {q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-4">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <Link
              to="/services/plumbing-sewer"
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all"
            >
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">
                Plumbing & Sewer
              </h3>
              <p className="text-gray-500 text-sm">Full plumbing services</p>
            </Link>
            <Link
              to="/services/power-washing"
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all"
            >
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">
                Power Washing
              </h3>
              <p className="text-gray-500 text-sm">Spring & fall cleaning</p>
            </Link>
            <Link
              to="/services/handyman"
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-orange-300 transition-all"
            >
              <h3 className="font-heading font-bold text-brand-navy-900 mb-1">
                Handyman Services
              </h3>
              <p className="text-gray-500 text-sm">General home repairs</p>
            </Link>
          </div>

          {/* Final CTA */}
          <div className="bg-brand-navy-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-black text-white text-xl">
                Need Help With Seasonal Maintenance?
              </h3>
              <p className="text-brand-navy-300 text-sm mt-1">
                Call Dom for a free estimate on any home maintenance project.
              </p>
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
