import { Link } from "@tanstack/react-router";
import { Phone, Home, Wrench, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="text-8xl font-heading font-black text-brand-orange-500 mb-4">404</div>
        <h1 className="text-3xl font-heading font-black text-brand-navy-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Looks like this page went down the drain. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-brand-navy-900 hover:bg-brand-navy-800 text-white px-6 py-3 rounded-full font-bold transition-all"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            to="/services"
            className="flex items-center justify-center gap-2 border-2 border-brand-navy-900 text-brand-navy-900 hover:bg-brand-navy-900 hover:text-white px-6 py-3 rounded-full font-bold transition-all"
          >
            <Wrench className="h-4 w-4" />
            Our Services
          </Link>
          <a
            href="tel:+17738669429"
            className="flex items-center justify-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-1 text-brand-orange-500 hover:text-brand-orange-600 text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
