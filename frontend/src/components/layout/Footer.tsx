import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const BUSINESS_PHONE = "(773) 647-7598";
const BUSINESS_PHONE_TEL = "+17736477598";

const services = [
  { name: "Emergency Plumbing", href: "/services/emergency-plumbing" },
  { name: "Drain Cleaning", href: "/services/drain-cleaning" },
  { name: "Leak Repair", href: "/services/leak-repair" },
  { name: "Plumbing & Sewer", href: "/services/plumbing-sewer" },
  { name: "Handyman Services", href: "/services/handyman" },
  { name: "Painting", href: "/services/painting" },
  { name: "Power Washing", href: "/services/power-washing" },
  { name: "Cleaning Services", href: "/services/cleaning" },
];

const locations = [
  { name: "Dunning", href: "/service-areas/dunning" },
  { name: "Portage Park", href: "/service-areas/portage-park" },
  { name: "Irving Park", href: "/service-areas/irving-park" },
  { name: "Jefferson Park", href: "/service-areas/jefferson-park" },
  { name: "Norwood Park", href: "/service-areas/norwood-park" },
  { name: "Belmont Cragin", href: "/service-areas/belmont-cragin" },
  { name: "Elmwood Park", href: "/service-areas/elmwood-park" },
  { name: "Norridge", href: "/service-areas/norridge" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "igotadom-chicago"
  );

  return (
    <footer className="bg-brand-navy-950 text-brand-navy-100">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/assets/EC85A0C1-AE5D-476B-AED2-C4C552478283-4.png"
                alt="Master Handyman Chicago Logo"
                className="h-24 w-24 object-contain"
              />
              <div>
                <div className="text-white font-heading font-bold text-xl leading-tight">
                  I Got A Dom
                </div>
                <div className="text-brand-orange-400 text-xs font-semibold tracking-wide uppercase">
                  Handyman & Plumbing
                </div>
              </div>
            </Link>
            <p className="text-brand-navy-300 text-sm leading-relaxed mb-4">
              Chicago's trusted handyman and plumbing service. Serving the Northwest Side and suburbs with honest, reliable work since 2010.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_PHONE_TEL}`}
                className="flex items-center gap-2 text-brand-orange-400 hover:text-brand-orange-300 font-semibold text-sm transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {BUSINESS_PHONE}
              </a>
              <a
                href="mailto:dom@igotadom.com"
                className="flex items-center gap-2 text-brand-navy-300 hover:text-brand-orange-400 text-sm transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                dom@igotadom.com
              </a>
              <div className="flex items-start gap-2 text-brand-navy-300 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Chicago, IL — Northwest Side & Suburbs
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 uppercase tracking-wide">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href as any}
                    className="text-brand-navy-300 hover:text-brand-orange-400 text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations column */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 uppercase tracking-wide">
              Service Areas
            </h3>
            <ul className="flex flex-col gap-2">
              {locations.map((loc) => (
                <li key={loc.href}>
                  <Link
                    to={loc.href as any}
                    className="text-brand-navy-300 hover:text-brand-orange-400 text-sm transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 uppercase tracking-wide">
              Business Hours
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-start gap-2 text-brand-navy-300">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-brand-orange-400" />
                <div>
                  <div className="text-white font-medium">Mon – Fri</div>
                  <div>7:00 AM – 7:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-brand-navy-300">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-brand-orange-400" />
                <div>
                  <div className="text-white font-medium">Saturday</div>
                  <div>8:00 AM – 5:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-brand-navy-300">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-brand-orange-400" />
                <div>
                  <div className="text-white font-medium">Sunday</div>
                  <div>Emergency Only</div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-brand-orange-500/10 border border-brand-orange-500/30 rounded-xl">
              <p className="text-brand-orange-400 text-xs font-semibold">
                🚨 24/7 Emergency Plumbing Available
              </p>
              <a
                href={`tel:${BUSINESS_PHONE_TEL}`}
                className="text-white text-sm font-bold hover:text-brand-orange-300 transition-colors"
              >
                Call {BUSINESS_PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-navy-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-navy-400 text-xs text-center sm:text-left">
            © {year} I Got A Dom Handyman & Plumbing. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-brand-navy-400">
            <a href="#" className="hover:text-brand-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-orange-400 transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-brand-navy-400 text-xs flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-brand-orange-500 fill-brand-orange-500" /> using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange-400 hover:text-brand-orange-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
