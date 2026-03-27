import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+17738669429"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-5 py-3 rounded-full shadow-brand-lg font-semibold text-sm transition-all hover:scale-105 active:scale-95 md:hidden"
      aria-label="Call I Got A Dom"
    >
      <Phone className="h-5 w-5" />
      <span>Call Now</span>
    </a>
  );
}
