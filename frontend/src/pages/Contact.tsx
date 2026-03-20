import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Emergency Only" },
];

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Contact <span className="text-brand-orange-400">I Got A Dom</span>
          </h1>
          <p className="text-brand-navy-200 text-lg">
            Get a free quote or call us directly for emergency service.
          </p>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="bg-brand-orange-500 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white font-semibold">
            <AlertTriangle className="h-5 w-5" />
            Plumbing Emergency? We respond 24/7.
          </div>
          <a
            href="tel:+17738669429"
            className="flex items-center gap-2 bg-white text-brand-orange-600 hover:bg-orange-50 px-6 py-2.5 rounded-full font-bold text-sm transition-all"
          >
            <Phone className="h-4 w-4" />
            Call (773) 866-9429 Now
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-heading font-black text-brand-navy-900 mb-6">
              Get In Touch
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              <a
                href="tel:+17738669429"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-navy-sm border border-gray-100 hover:border-brand-orange-300 transition-all group"
              >
                <div className="bg-brand-orange-50 rounded-xl p-3 shrink-0">
                  <Phone className="h-6 w-6 text-brand-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</div>
                  <div className="text-brand-navy-900 font-bold text-lg group-hover:text-brand-orange-600 transition-colors">
                    (773) 866-9429
                  </div>
                </div>
              </a>

              <a
                href="mailto:dom@igotadom.com"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-navy-sm border border-gray-100 hover:border-brand-orange-300 transition-all group"
              >
                <div className="bg-brand-orange-50 rounded-xl p-3 shrink-0">
                  <Mail className="h-6 w-6 text-brand-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</div>
                  <div className="text-brand-navy-900 font-bold group-hover:text-brand-orange-600 transition-colors">
                    dom@igotadom.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-navy-sm border border-gray-100">
                <div className="bg-brand-orange-50 rounded-xl p-3 shrink-0">
                  <MapPin className="h-6 w-6 text-brand-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Service Area</div>
                  <div className="text-brand-navy-900 font-bold">
                    Chicago Northwest Side & Suburbs
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-navy-sm border border-gray-100">
              <h3 className="font-heading font-bold text-brand-navy-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-orange-500" />
                Business Hours
              </h3>
              <div className="flex flex-col gap-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-brand-navy-800 font-medium text-sm">{day}</span>
                    <span className="text-gray-600 text-sm">{time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-brand-orange-50 border border-brand-orange-200 rounded-xl p-3">
                <p className="text-brand-orange-700 text-xs font-semibold">
                  🚨 Emergency plumbing available 24/7 — call anytime!
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
