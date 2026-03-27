import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ChevronRight,
  Droplets,
  Paintbrush,
  Sparkles,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: AlertTriangle,
    name: "Emergency Plumbing",
    desc: "24/7 emergency response for burst pipes, flooding, sewage backups, and urgent plumbing failures. We arrive fast and fix it right.",
    href: "/services/emergency-plumbing",
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50",
    border: "border-brand-orange-200",
  },
  {
    icon: Droplets,
    name: "Drain Cleaning",
    desc: "Professional drain snaking and hydro-jetting for kitchen, bathroom, and floor drains. We clear stubborn clogs fast.",
    href: "/services/drain-cleaning",
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50",
    border: "border-brand-navy-200",
  },
  {
    icon: Wrench,
    name: "Leak Repair",
    desc: "Fast detection and repair of pipe leaks, dripping faucets, and water damage before they cause major structural issues.",
    href: "/services/leak-repair",
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50",
    border: "border-brand-orange-200",
  },
  {
    icon: Zap,
    name: "Plumbing & Sewer",
    desc: "Full plumbing installations, sewer line repair and replacement, water heater service, and more.",
    href: "/services/plumbing-sewer",
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50",
    border: "border-brand-navy-200",
  },
  {
    icon: Wrench,
    name: "Handyman Services",
    desc: "Carpentry, drywall, door and window repairs, furniture assembly, TV mounting, and general home maintenance.",
    href: "/services/handyman",
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50",
    border: "border-brand-orange-200",
  },
  {
    icon: Paintbrush,
    name: "Painting",
    desc: "Interior and exterior painting with thorough prep, clean lines, and a professional finish that lasts.",
    href: "/services/painting",
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50",
    border: "border-brand-navy-200",
  },
  {
    icon: Wind,
    name: "Power Washing",
    desc: "Driveway, siding, deck, fence, and patio power washing to restore your Chicago home's curb appeal.",
    href: "/services/power-washing",
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50",
    border: "border-brand-orange-200",
  },
  {
    icon: Sparkles,
    name: "Cleaning Services",
    desc: "Move-in/move-out and deep cleaning for Chicago apartments and homes. Thorough, reliable, and affordable.",
    href: "/services/cleaning",
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50",
    border: "border-brand-navy-200",
  },
];

export default function ServicesHub() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Our <span className="text-brand-orange-400">Services</span>
          </h1>
          <p className="text-brand-navy-200 text-lg">
            From emergency plumbing to home cleaning — we handle it all on
            Chicago's Northwest Side.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(
              ({ icon: Icon, name, desc, href, color, bg, border }) => (
                <div
                  key={href}
                  className={`bg-white rounded-2xl p-8 border-2 ${border} shadow-navy-sm hover:shadow-navy-md transition-all hover:-translate-y-1`}
                >
                  <div className={`${bg} rounded-xl p-3 w-fit mb-4 shrink-0`}>
                    <Icon className={`h-7 w-7 ${color}`} />
                  </div>
                  <h2 className="font-heading font-black text-brand-navy-900 text-xl mb-3">
                    {name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {desc}
                  </p>
                  <Link
                    to={href}
                    className="inline-flex items-center gap-1 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
