import { Link } from "@tanstack/react-router";
import { CheckCircle, Paintbrush, Phone } from "lucide-react";

const paintingServices = [
  {
    title: "Interior Room Painting",
    desc: "Walls, ceilings, and trim with proper prep and quality finish coats.",
  },
  {
    title: "Exterior Painting",
    desc: "Siding, trim, shutters, and doors prepped for Chicago weather durability.",
  },
  {
    title: "Surface Preparation",
    desc: "Sanding, filling holes and cracks, priming — the foundation of a lasting paint job.",
  },
  {
    title: "Drywall Patching",
    desc: "We patch holes and cracks before painting for a smooth, seamless finish.",
  },
  {
    title: "Cabinet Refresh",
    desc: "Give your kitchen or bathroom cabinets a fresh look without replacement.",
  },
  {
    title: "Trim & Door Painting",
    desc: "Baseboards, door frames, window trim, and doors painted with precision.",
  },
];

const process = [
  {
    step: "1",
    title: "Assessment & Quote",
    desc: "We assess the space and provide a clear quote before any work begins.",
  },
  {
    step: "2",
    title: "Surface Preparation",
    desc: "We protect floors, patch imperfections, sand surfaces, and prime as needed.",
  },
  {
    step: "3",
    title: "Painting",
    desc: "We apply quality paint with clean lines and even coverage.",
  },
  {
    step: "4",
    title: "Cleanup",
    desc: "We clean up thoroughly and leave your space ready to enjoy.",
  },
];

const faqs = [
  {
    q: "Do you do both interior and exterior painting?",
    a: "Yes. We handle interior rooms, ceilings, trim, doors, and cabinets as well as exterior siding, trim, and fences.",
  },
  {
    q: "Do you patch drywall before painting?",
    a: "Yes. Proper surface prep is a key part of our painting process. We patch holes, cracks, and imperfections before applying paint.",
  },
  {
    q: "How long does interior painting take?",
    a: "A single room typically takes one day. Larger projects are quoted based on scope. We give you a clear timeline before starting.",
  },
];

export default function Painting() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
              Painting Services{" "}
              <span className="text-brand-orange-400">Chicago</span>
            </h1>
            <p className="text-brand-navy-200 text-lg mb-6 leading-relaxed">
              Interior and exterior painting done right — with proper surface
              prep, quality materials, and clean, professional results.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+17738669429"
                className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all shadow-brand-md"
              >
                <Phone className="h-5 w-5" />
                Call (773) 866-9429
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
              src="/assets/generated/painting-hero.dim_1200x600.png"
              alt="Professional painting an interior wall of a Chicago home with roller and tray with clean lines"
              className="w-full rounded-2xl shadow-navy-lg object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Our Painting Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paintingServices.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Paintbrush className="h-5 w-5 text-brand-orange-500 shrink-0" />
                  <h3 className="font-heading font-bold text-brand-navy-900">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-8 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-brand-orange-500 text-white rounded-full flex items-center justify-center font-heading font-black text-xl mx-auto mb-3">
                  {step}
                </div>
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
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
              <div
                key={q}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">
                  {q}
                </h3>
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
            Ready for a Fresh Look?
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Call for a free painting quote — we serve all of Chicago's Northwest
            Side.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17738669429"
              className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <Phone className="h-5 w-5" />
              (773) 866-9429
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy-900 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
