import { Link } from "@tanstack/react-router";
import { MapPin, ChevronRight, Phone } from "lucide-react";

const areas = [
  {
    name: "Dunning",
    href: "/service-areas/dunning",
    desc: "Chicago's Dunning neighborhood on the Northwest Side.",
    zip: "60634",
  },
  {
    name: "Portage Park",
    href: "/service-areas/portage-park",
    desc: "The heart of Chicago's Northwest Side.",
    zip: "60630",
  },
  {
    name: "Irving Park",
    href: "/service-areas/irving-park",
    desc: "Historic Irving Park neighborhood.",
    zip: "60641",
  },
  {
    name: "Jefferson Park",
    href: "/service-areas/jefferson-park",
    desc: "Jefferson Park transit hub neighborhood.",
    zip: "60630",
  },
  {
    name: "Norwood Park",
    href: "/service-areas/norwood-park",
    desc: "Quiet residential Norwood Park.",
    zip: "60631",
  },
  {
    name: "Belmont Cragin",
    href: "/service-areas/belmont-cragin",
    desc: "Belmont Cragin on Chicago's Northwest Side.",
    zip: "60639",
  },
  {
    name: "Elmwood Park",
    href: "/service-areas/elmwood-park",
    desc: "Elmwood Park suburb just west of Chicago.",
    zip: "60707",
  },
  {
    name: "Norridge",
    href: "/service-areas/norridge",
    desc: "Norridge suburb near O'Hare.",
    zip: "60706",
  },
];

export default function ServiceAreasHub() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Service <span className="text-brand-orange-400">Areas</span>
          </h1>
          <p className="text-brand-navy-200 text-lg">
            Proudly serving Chicago's Northwest Side and surrounding suburbs.
          </p>
        </div>
      </section>

      {/* Areas grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map(({ name, href, desc, zip }) => (
              <Link
                key={href}
                to={href}
                className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-navy-sm hover:shadow-navy-md hover:border-brand-orange-300 transition-all hover:-translate-y-1"
              >
                <div className="bg-brand-orange-50 rounded-xl p-2.5 w-fit mb-3">
                  <MapPin className="h-5 w-5 text-brand-orange-500" />
                </div>
                <h2 className="font-heading font-bold text-brand-navy-900 text-lg mb-1 group-hover:text-brand-orange-600 transition-colors">
                  {name}
                </h2>
                <p className="text-gray-500 text-xs mb-2">{desc}</p>
                <div className="text-xs text-brand-navy-400 font-medium">ZIP: {zip}</div>
                <div className="flex items-center gap-1 text-brand-orange-500 text-xs font-semibold mt-3">
                  View area <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-black text-white mb-4">
            Don't See Your Area?
          </h2>
          <p className="text-brand-navy-200 mb-8">
            We may still be able to help. Call us to check if we serve your neighborhood.
          </p>
          <a
            href="tel:+17738669429"
            className="inline-flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            <Phone className="h-5 w-5" />
            (773) 866-9429
          </a>
        </div>
      </section>
    </main>
  );
}
