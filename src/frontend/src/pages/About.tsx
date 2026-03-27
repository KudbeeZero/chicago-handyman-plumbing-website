import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  Clock,
  Phone,
  Shield,
  Star,
  Users,
  Wrench,
} from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "2,000+", label: "Happy Customers" },
  { icon: Star, value: "5.0", label: "Average Rating" },
  { icon: Award, value: "100%", label: "Licensed & Insured" },
];

const values = [
  {
    icon: Shield,
    title: "Honest Pricing",
    desc: "No hidden fees, no surprise charges. You get a clear quote before any work begins.",
  },
  {
    icon: Clock,
    title: "On-Time Arrival",
    desc: "We respect your time. If we say we'll be there at 9am, we'll be there at 9am.",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    desc: "Every job is backed by our satisfaction guarantee. We don't leave until it's right.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    desc: "15+ years of hands-on experience means we've seen it all and can fix it all.",
  },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            About <span className="text-brand-orange-400">I Got A Dom</span>
          </h1>
          <p className="text-brand-navy-200 text-lg leading-relaxed">
            Chicago's trusted handyman and plumbing service, built on honesty,
            reliability, and 15+ years of experience serving the Northwest Side.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-orange-500 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-3xl font-heading font-black text-white">
                  {value}
                </div>
                <div className="text-orange-100 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-4">
                Meet Dom — Your Neighborhood Handyman
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dom has been fixing Chicago homes since 2010. Born and raised on
                the Northwest Side, he knows these bungalows, two-flats, and
                vintage apartments inside and out.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What started as helping neighbors with small repairs grew into a
                full-service handyman and plumbing business. Today, Dom and his
                team handle everything from emergency pipe bursts to full
                interior painting projects.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The name says it all — when you need something fixed, you've got
                a Dom.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+17738669429"
                  className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call Dom Now
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 border-2 border-brand-navy-900 text-brand-navy-900 hover:bg-brand-navy-900 hover:text-white px-6 py-3 rounded-full font-bold transition-all"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="bg-brand-navy-50 rounded-2xl p-8 text-center">
              <img
                src="/assets/generated/logo.dim_400x400.png"
                alt="I Got A Dom Handyman Chicago Logo"
                className="h-48 w-48 object-contain mx-auto mb-4"
              />
              <div className="text-brand-navy-900 font-heading font-bold text-xl">
                Dom
              </div>
              <div className="text-brand-orange-500 text-sm font-semibold">
                Owner & Master Handyman
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-black text-brand-navy-900 mb-3">
              Why Chicago Trusts Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-navy-sm border border-gray-100"
              >
                <div className="bg-brand-orange-50 rounded-xl p-3 w-fit mb-4">
                  <Icon className="h-6 w-6 text-brand-orange-500" />
                </div>
                <h3 className="font-heading font-bold text-brand-navy-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-black text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-brand-navy-200 mb-8">
            Call Dom today for a free estimate on any home repair or plumbing
            project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17738669429"
              className="flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-brand-md"
            >
              <Phone className="h-5 w-5" />
              (773) 866-9429
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy-900 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Free Quote Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
