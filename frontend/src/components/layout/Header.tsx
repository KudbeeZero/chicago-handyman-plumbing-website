import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useBookingModal } from "@/hooks/useBookingModal";

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { open: openBooking } = useBookingModal();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-brand-navy-900 shadow-navy-md">
      <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Phone number */}
        <a
          href={`tel:${BUSINESS_PHONE_TEL}`}
          className="flex items-center gap-2 text-brand-orange-400 hover:text-brand-orange-300 font-bold text-sm transition-colors"
        >
          <Phone className="h-4 w-4" />
          {BUSINESS_PHONE}
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/")
                ? "text-brand-orange-400"
                : "text-brand-navy-100 hover:text-brand-orange-400"
            }`}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-brand-navy-100 hover:text-brand-orange-400 transition-colors">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-navy-lg border border-gray-100 py-2 z-50">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-4 py-2 text-sm text-brand-navy-800 hover:bg-brand-orange-50 hover:text-brand-orange-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm font-semibold text-brand-orange-600 hover:bg-brand-orange-50 transition-colors"
                  >
                    All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about")
                ? "text-brand-orange-400"
                : "text-brand-navy-100 hover:text-brand-orange-400"
            }`}
          >
            About
          </Link>
          <Link
            to="/pricing"
            className={`text-sm font-medium transition-colors ${
              isActive("/pricing")
                ? "text-brand-orange-400"
                : "text-brand-navy-100 hover:text-brand-orange-400"
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className={`text-sm font-medium transition-colors ${
              isActive("/blog")
                ? "text-brand-orange-400"
                : "text-brand-navy-100 hover:text-brand-orange-400"
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors ${
              isActive("/contact")
                ? "text-brand-orange-400"
                : "text-brand-navy-100 hover:text-brand-orange-400"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-navy-800 border-t border-brand-navy-700">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              to="/"
              className="text-brand-navy-100 hover:text-brand-orange-400 py-2 text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-brand-navy-100 hover:text-brand-orange-400 py-2 text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="text-brand-navy-300 hover:text-brand-orange-400 py-1.5 pl-4 text-sm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link
              to="/about"
              className="text-brand-navy-100 hover:text-brand-orange-400 py-2 text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="text-brand-navy-100 hover:text-brand-orange-400 py-2 text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-brand-navy-100 hover:text-brand-orange-400 py-2 text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-brand-navy-100 hover:text-brand-orange-400 py-2 text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-3 border-t border-brand-navy-700 mt-2">
              <a
                href={`tel:${BUSINESS_PHONE_TEL}`}
                className="flex items-center justify-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-5 py-3 rounded-full font-bold text-sm transition-all"
              >
                <Phone className="h-4 w-4" />
                Call {BUSINESS_PHONE}
              </a>
              <button
                onClick={() => { openBooking(); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 border-2 border-brand-orange-500 text-brand-orange-400 hover:bg-brand-orange-500 hover:text-white px-5 py-3 rounded-full font-bold text-sm transition-all"
              >
                Book Service
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
