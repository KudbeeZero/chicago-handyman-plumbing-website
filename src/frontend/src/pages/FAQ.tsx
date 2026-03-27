import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

const faqCategories = [
  {
    category: "Emergency Plumbing",
    faqs: [
      {
        q: "Do you offer 24/7 emergency plumbing service?",
        a: "Yes! We respond to plumbing emergencies around the clock, 365 days a year. Call (773) 647-7598 any time for immediate help.",
      },
      {
        q: "How quickly can you respond to a plumbing emergency?",
        a: "We aim to arrive within 60-90 minutes for most Northwest Side Chicago locations. Response time may vary based on traffic and current call volume.",
      },
      {
        q: "What counts as a plumbing emergency?",
        a: "Burst pipes, major leaks, sewage backups, no hot water in winter, flooding, and gas line concerns all qualify as emergencies. When in doubt, call us.",
      },
    ],
  },
  {
    category: "Pricing",
    faqs: [
      {
        q: "Do you charge for estimates?",
        a: "No - estimates are always free. We'll assess the job and give you a clear price before any work begins.",
      },
      {
        q: "Are there extra charges for weekend or evening calls?",
        a: "Standard jobs during business hours are priced normally. Emergency after-hours calls may include a surcharge, which we'll always disclose upfront.",
      },
      {
        q: "Do you offer any discounts?",
        a: "We offer discounts for seniors, veterans, and repeat customers. Ask about our current promotions when you call.",
      },
    ],
  },
  {
    category: "Service Area",
    faqs: [
      {
        q: "What neighborhoods do you serve?",
        a: "We serve Chicago's Northwest Side including Dunning, Portage Park, Irving Park, Jefferson Park, Norwood Park, Belmont Cragin, and nearby suburbs like Elmwood Park and Norridge.",
      },
      {
        q: "Do you serve areas outside Chicago?",
        a: "Yes, we serve several suburbs including Elmwood Park, Norridge, Harwood Heights, and Park Ridge. Call to confirm if your area is covered.",
      },
    ],
  },
  {
    category: "Plumbing",
    faqs: [
      {
        q: "Do you handle sewer line repairs?",
        a: "Yes. We handle sewer line inspections, cleaning, repair, and replacement for Chicago homes and two-flats.",
      },
      {
        q: "Can you replace my water heater?",
        a: "Absolutely. We install and replace both traditional tank and tankless water heaters. We'll help you choose the right unit for your home.",
      },
    ],
  },
  {
    category: "Handyman & Other",
    faqs: [
      {
        q: "What handyman services do you offer?",
        a: "We handle carpentry, drywall repair, door and window repairs, furniture assembly, TV mounting, painting, power washing, and general home maintenance.",
      },
      {
        q: "Do you do move-out cleaning?",
        a: "Yes! We offer move-in and move-out deep cleaning services for Chicago apartments and homes. Great for renters and landlords alike.",
      },
      {
        q: "Can I book multiple services at once?",
        a: "Absolutely. Many customers combine plumbing, handyman, and cleaning services in a single visit to save time and money.",
      },
    ],
  },
];

export default function FAQ() {
  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap(({ faqs }) =>
      faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    ),
  });

  return (
    <main>
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Frequently Asked{" "}
            <span className="text-brand-orange-400">Questions</span>
          </h1>
          <p className="text-brand-navy-200 text-lg">
            Everything you need to know about our services, pricing, and service
            area.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          {faqCategories.map(({ category, faqs }) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-heading font-black text-brand-navy-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-brand-orange-500 rounded-full inline-block" />
                {category}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-2"
              >
                {faqs.map(({ q, a }) => (
                  <AccordionItem
                    key={q}
                    value={q}
                    className="bg-white rounded-2xl border border-gray-100 shadow-navy-sm px-6"
                  >
                    <AccordionTrigger className="text-brand-navy-900 font-semibold text-left py-4 hover:text-brand-orange-600 hover:no-underline">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-black text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Call Dom directly - he's happy to answer any questions before you
            book.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17736477598"
              className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <Phone className="h-5 w-5" />
              (773) 647-7598
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy-900 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: intentional JSON-LD schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
    </main>
  );
}
