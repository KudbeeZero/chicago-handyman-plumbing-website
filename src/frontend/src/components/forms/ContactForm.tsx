import { useActor } from "@/hooks/useActor";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const BUSINESS_PHONE = "(773) 647-7598";
const BUSINESS_PHONE_TEL = "+17736477598";

const services = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Leak Repair",
  "Plumbing & Sewer",
  "Handyman Services",
  "Painting",
  "Power Washing",
  "Cleaning Services",
  "Other",
];

export default function ContactForm() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zip: "",
    serviceNeeded: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setIsSubmitting(true);
    setError("");
    try {
      await actor.submitLead(
        formData.name,
        formData.phone,
        null,
        formData.zip || null,
        formData.serviceNeeded,
        formData.details,
        "estimate",
      );
      setSubmitted(true);
    } catch (_err) {
      setError(
        `Something went wrong. Please call us directly at ${BUSINESS_PHONE}.`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-navy-md text-center">
        <CheckCircle className="h-16 w-16 text-brand-orange-500 mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-brand-navy-900 mb-2">
          Request Received!
        </h3>
        <p className="text-gray-600 mb-4">
          Thanks, {formData.name}! Dom will call you back within 1 hour during
          business hours.
        </p>
        <a
          href={`tel:${BUSINESS_PHONE_TEL}`}
          className="inline-flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
        >
          Need immediate help? Call now
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 shadow-navy-md"
    >
      <h3 className="text-2xl font-heading font-bold text-brand-navy-900 mb-6">
        Get Your Free Quote
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="cf-name"
            className="block text-sm font-semibold text-brand-navy-800 mb-1.5"
          >
            Your Name *
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange-400 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="cf-phone"
            className="block text-sm font-semibold text-brand-navy-800 mb-1.5"
          >
            Phone Number *
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(773) 555-0100"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange-400 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="cf-zip"
            className="block text-sm font-semibold text-brand-navy-800 mb-1.5"
          >
            ZIP Code
          </label>
          <input
            id="cf-zip"
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="60634"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange-400 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="cf-service"
            className="block text-sm font-semibold text-brand-navy-800 mb-1.5"
          >
            Service Needed *
          </label>
          <select
            id="cf-service"
            name="serviceNeeded"
            required
            value={formData.serviceNeeded}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange-400 focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="cf-details"
          className="block text-sm font-semibold text-brand-navy-800 mb-1.5"
        >
          Describe the Problem
        </label>
        <textarea
          id="cf-details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us what's going on — the more detail, the better..."
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange-400 focus:border-transparent transition-all resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm mb-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !actor}
        className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 disabled:opacity-60 text-white py-3.5 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send My Free Quote Request"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center mt-3">
        No spam. Dom will call you back within 1 hour during business hours.
      </p>
    </form>
  );
}
