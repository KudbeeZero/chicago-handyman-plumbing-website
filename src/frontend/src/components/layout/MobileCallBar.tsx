import { Phone } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-navy-900 border-t border-brand-navy-700 p-3 md:hidden">
      <a
        href="tel:+17738669429"
        className="flex items-center justify-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white w-full py-3 rounded-full font-bold text-base transition-all active:scale-95"
      >
        <Phone className="h-5 w-5" />
        Call (773) 866-9429 — Free Estimate
      </a>
    </div>
  );
}
