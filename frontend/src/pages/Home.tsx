import { Link } from "@tanstack/react-router";
import {
  Phone,
  Star,
  Clock,
  CheckCircle,
  Wrench,
  Droplets,
  Paintbrush,
  Zap,
  Wind,
  Sparkles,
  ChevronRight,
  MapPin,
  AlertTriangle,
  CalendarCheck,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { useBookingModal } from "@/hooks/useBookingModal";

const BUSINESS_PHONE = "(773) 647-7598";
const BUSINESS_PHONE_TEL = "+17736477598";

const services = [
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    name: "Emergency Plumbing",
    desc: "24/7 rapid response for burst pipes, flooding, and urgent plumbing crises.",
    href: "/services/emergency-plumbing",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    name: "Drain Cleaning",
    desc: "Professional drain clearing for kitchens, bathrooms, and main sewer lines.",
    href: "/services/drain-cleaning",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    name: "Leak Repair",
    desc: "Fast detection and repair of pipe leaks, faucet drips, and water damage.",
    href: "/services/leak-repair",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    name: "Plumbing & Sewer",
    desc: "Full plumbing installations, sewer line repair, and system upgrades.",
    href: "/services/plumbing-sewer",
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    name: "Handyman Services",
    desc: "General repairs, installations, and home improvement projects done right.",
    href: "/services/handyman",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    name: "Painting",
    desc: "Interior and exterior painting with clean prep and professional finish.",
    href: "/services/painting",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: <Wind className="h-6 w-6" />,
    name: "Power Washing",
    desc: "High-pressure cleaning for driveways, siding, decks, and more.",
    href: "/services/power-washing",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    name: "Cleaning Services",
    desc: "Deep cleaning, move-in/out cleaning, and recurring home cleaning.",
    href: "/services/cleaning",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

const reviews = [
  {
    name: "Maria S.",
    neighborhood: "Portage Park",
    rating: 5,
    text: "Dom fixed our burst pipe at 11pm on a Sunday. Fast, professional, and fair price. Will call again!",
  },
  {
    name: "James K.",
    neighborhood: "Dunning",
    rating: 5,
    text: "Had a clogged main sewer line. Dom came out same day and cleared it completely. Highly recommend.",
  },
  {
    name: "Linda R.",
    neighborhood: "Irving Park",
    rating: 5,
    text: "Used Dom for painting and handyman work. Excellent quality, on time, and cleaned up after himself.",
  },
];

const neighborhoods = [
  "Dunning", "Portage Park", "Irving Park", "Jefferson Park",
  "Norwood Park", "Belmont Cragin", "Elmwood Park", "Norridge",
  "Harwood Heights", "Schiller Park",
];

export default function Home() {
  const { open: openBooking } = useBookingModal();

  return (
    <div className="min-h-screen">
      {/* Hero Section — full-width banner image */}
      <section className="relative w-full overflow-hidden bg-brand-navy-900">
        {/* Banner image */}
        <img
          src="/assets/generated/hero-banner.dim_1334x750.png"
          alt="I Got a Dom — Chicago's Trusted Handyman & Plumber"
          className="w-full object-cover object-center block"
          style={{ maxHeight: "560px", minHeight: "220px" }}
        />

        {/* CTA overlay pinned to the bottom of the image */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/50 to-transparent px-4 py-6 md:py-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              className="flex items-center justify-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-brand w-full sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Call Now — {BUSINESS_PHONE}
            </a>
            <button
              onClick={openBooking}
              className="flex items-center justify-center gap-2 border-2 border-brand-orange-400 text-white hover:bg-brand-orange-500 hover:border-brand-orange-500 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto"
            >
              <CalendarCheck className="h-5 w-5" />
              Book Service
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-white/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-brand-orange-400" />
              Same-Day Service
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-brand-orange-400" />
              Free Estimates
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-brand-orange-400" />
              24/7 Emergency
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-orange-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-white" />
              5-Star Rated on Google
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Same-Day Appointments
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Satisfaction Guaranteed
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {BUSINESS_PHONE}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-brand-navy-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From emergency plumbing to home improvement — we handle it all with skill and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-navy-md border border-gray-100 hover:border-brand-orange-200 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl ${service.bg} ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-navy-900 text-base mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {service.desc}
                </p>
                <span className="text-brand-orange-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-brand-navy-900 hover:bg-brand-navy-800 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              View All Services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-brand-navy-900 mb-6">
                Why Chicago Homeowners Choose Us
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Fast Response Times",
                    desc: "We answer calls 24/7 and offer same-day service for most jobs. Emergencies get priority.",
                  },
                  {
                    title: "Upfront, Honest Pricing",
                    desc: "No surprise fees. We give you a clear estimate before any work begins.",
                  },
                  {
                    title: "Local Chicago Expertise",
                    desc: "We know Chicago homes — the old pipes, the harsh winters, the unique challenges.",
                  },
                  {
                    title: "Quality Workmanship",
                    desc: "Every job is done right the first time. We stand behind our work with a satisfaction guarantee.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-brand-orange-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-brand-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy-900 rounded-3xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-2">Get a Free Estimate</h3>
              <p className="text-brand-navy-300 text-sm mb-6">
                Tell us about your project and we'll get back to you quickly with a fair quote.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-brand-navy-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-brand-orange-400 fill-brand-orange-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">5.0 average rating from Chicago homeowners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-brand-orange-400 fill-brand-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <div className="font-bold text-brand-navy-900 text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {review.neighborhood}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-brand-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold mb-4">
            Serving Chicago's Northwest Side
          </h2>
          <p className="text-brand-navy-300 mb-8 max-w-xl mx-auto">
            We proudly serve these Chicago neighborhoods and surrounding suburbs:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="bg-brand-navy-800 border border-brand-navy-700 text-brand-navy-200 px-4 py-2 rounded-full text-sm"
              >
                {n}
              </span>
            ))}
          </div>
          <a
            href={`tel:${BUSINESS_PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS_PHONE}
          </a>
        </div>
      </section>
    </div>
  );
}
