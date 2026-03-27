import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBookingModal } from "@/hooks/useBookingModal";
import { useSubmitLead } from "@/hooks/useQueries";
import {
  AlertTriangle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Loader2,
  Paintbrush,
  Phone,
  Sparkles,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";

const BUSINESS_PHONE = "(773) 647-7598";
const BUSINESS_PHONE_TEL = "+17736477598";

const SERVICES = [
  {
    name: "Emergency Plumbing",
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-50 border-red-200",
  },
  {
    name: "Drain Cleaning",
    icon: Droplets,
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50 border-brand-navy-200",
  },
  {
    name: "Leak Repair",
    icon: Wrench,
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50 border-brand-orange-200",
  },
  {
    name: "Plumbing & Sewer",
    icon: Zap,
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50 border-brand-navy-200",
  },
  {
    name: "Handyman Services",
    icon: Wrench,
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50 border-brand-orange-200",
  },
  {
    name: "Painting",
    icon: Paintbrush,
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50 border-brand-navy-200",
  },
  {
    name: "Power Washing",
    icon: Wind,
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50 border-brand-orange-200",
  },
  {
    name: "Cleaning Services",
    icon: Sparkles,
    color: "text-brand-navy-600",
    bg: "bg-brand-navy-50 border-brand-navy-200",
  },
];

interface FormData {
  service: string;
  requestType: "" | "Estimate" | "Emergency";
  details: string;
  name: string;
  phone: string;
  email: string;
}

const INITIAL_FORM: FormData = {
  service: "",
  requestType: "",
  details: "",
  name: "",
  phone: "",
  email: "",
};

export default function BookingModal() {
  const { isOpen, close } = useBookingModal();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [_submitted, setSubmitted] = useState(false);
  const submitLead = useSubmitLead();

  function handleClose() {
    close();
    setTimeout(() => {
      setStep(1);
      setForm(INITIAL_FORM);
      setSubmitted(false);
    }, 300);
  }

  function handleServiceSelect(service: string) {
    setForm((f) => ({ ...f, service }));
    setStep(2);
  }

  function handleRequestType(type: "Estimate" | "Emergency") {
    setForm((f) => ({ ...f, requestType: type }));
    if (type === "Emergency") {
      setStep(3); // emergency screen
    } else {
      setStep(4); // details step
    }
  }

  async function handleSubmit() {
    try {
      await submitLead.mutateAsync({
        name: form.name,
        phone: form.phone,
        email: form.email || null,
        zip: null,
        serviceNeeded: form.service,
        details: form.details,
        requestType: "Estimate",
      });
      setSubmitted(true);
      setStep(6);
    } catch {
      // error handled by mutation state
    }
  }

  const canSubmit =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.email.trim() !== "";

  function getStepLabel() {
    if (step === 1) return "Step 1 of 4 — Select a Service";
    if (step === 2) return "Step 2 of 4 — Request Type";
    if (step === 3) return "Emergency Contact";
    if (step === 4) return "Step 3 of 4 — Additional Details";
    if (step === 5) return "Step 4 of 4 — Your Contact Info";
    return "";
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) handleClose();
      }}
    >
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-brand-navy-900 font-heading text-xl">
            {step === 6 ? "🎉 Booking Submitted!" : "Book a Service"}
          </DialogTitle>
          {step !== 6 && (
            <DialogDescription className="text-brand-navy-500 text-sm font-medium">
              {getStepLabel()}
            </DialogDescription>
          )}
        </DialogHeader>

        {/* Progress bar (not shown on emergency or confirmation) */}
        {step !== 3 && step !== 6 && (
          <div className="flex gap-1.5 mb-2">
            {[1, 2, 4, 5].map((s, i) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  (step === 1 && i === 0) ||
                  (step === 2 && i <= 1) ||
                  (step === 4 && i <= 2) ||
                  (step === 5 && i <= 3)
                    ? "bg-brand-orange-500"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        )}

        {/* STEP 1: Select Service */}
        {step === 1 && (
          <div className="grid grid-cols-2 gap-3 mt-2">
            {SERVICES.map(({ name, icon: Icon, color, bg }) => (
              <button
                key={name}
                type="button"
                onClick={() => handleServiceSelect(name)}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all hover:scale-[1.02] hover:shadow-md ${bg} hover:border-brand-orange-400`}
              >
                <div className={`shrink-0 ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-brand-navy-900 font-semibold text-sm leading-tight">
                  {name}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* STEP 2: Estimate or Emergency */}
        {step === 2 && (
          <div className="space-y-4 mt-2">
            <p className="text-brand-navy-700 text-sm">
              You selected:{" "}
              <span className="font-bold text-brand-orange-600">
                {form.service}
              </span>
            </p>
            <p className="text-brand-navy-600 text-sm">
              What type of request is this?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleRequestType("Estimate")}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border-2 border-brand-navy-200 bg-brand-navy-50 hover:border-brand-orange-400 hover:bg-brand-orange-50 transition-all group"
              >
                <CheckCircle className="h-8 w-8 text-brand-navy-500 group-hover:text-brand-orange-500 transition-colors" />
                <div className="text-center">
                  <div className="font-bold text-brand-navy-900 text-sm">
                    Get an Estimate
                  </div>
                  <div className="text-brand-navy-500 text-xs mt-1">
                    Schedule a visit & get pricing
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleRequestType("Emergency")}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border-2 border-red-200 bg-red-50 hover:border-red-500 hover:bg-red-100 transition-all group"
              >
                <AlertTriangle className="h-8 w-8 text-red-400 group-hover:text-red-600 transition-colors" />
                <div className="text-center">
                  <div className="font-bold text-red-700 text-sm">
                    Emergency
                  </div>
                  <div className="text-red-500 text-xs mt-1">
                    Needs immediate attention
                  </div>
                </div>
              </button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStep(1)}
              className="flex items-center gap-1 text-brand-navy-500"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </Button>
          </div>
        )}

        {/* STEP 3: Emergency — call prompt (dead end) */}
        {step === 3 && (
          <div className="text-center space-y-5 py-4">
            <div className="flex justify-center">
              <div className="bg-red-100 rounded-full p-5">
                <AlertTriangle className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-heading font-black text-brand-navy-900 mb-2">
                This is an Emergency!
              </h3>
              <p className="text-brand-navy-600 text-sm leading-relaxed">
                For immediate assistance, please call us right now. We're
                available 24/7 for emergencies.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl w-full"
            >
              <Phone className="h-6 w-6" />
              Call {BUSINESS_PHONE} Now
            </a>
            <p className="text-brand-navy-400 text-xs">
              Available 24 hours a day, 7 days a week
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStep(2)}
              className="flex items-center gap-1 text-brand-navy-500 mx-auto"
            >
              <ChevronLeft className="h-4 w-4" /> Go Back
            </Button>
          </div>
        )}

        {/* STEP 4: Additional Details */}
        {step === 4 && (
          <div className="space-y-4 mt-2">
            <p className="text-brand-navy-700 text-sm">
              Service:{" "}
              <span className="font-bold text-brand-orange-600">
                {form.service}
              </span>
            </p>
            <div className="space-y-2">
              <Label
                htmlFor="details"
                className="text-brand-navy-800 font-semibold"
              >
                Tell us more about your project
              </Label>
              <Textarea
                id="details"
                placeholder="Describe the issue, location in your home, any relevant details..."
                value={form.details}
                onChange={(e) =>
                  setForm((f) => ({ ...f, details: e.target.value }))
                }
                className="min-h-[120px] resize-none border-brand-navy-200 focus:border-brand-orange-400"
              />
              <p className="text-brand-navy-400 text-xs">
                Optional but helps us prepare for your visit.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep(2)}
                className="flex items-center gap-1 text-brand-navy-500"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
              <Button
                onClick={() => setStep(5)}
                className="flex-1 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold rounded-xl"
              >
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 5: Contact Info */}
        {step === 5 && (
          <div className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-brand-navy-800 font-semibold"
              >
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Smith"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="border-brand-navy-200 focus:border-brand-orange-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-brand-navy-800 font-semibold"
              >
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(773) 555-0100"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className="border-brand-navy-200 focus:border-brand-orange-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-brand-navy-800 font-semibold"
              >
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="border-brand-navy-200 focus:border-brand-orange-400"
              />
            </div>
            {submitLead.isError && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                Something went wrong. Please try again or call us directly at{" "}
                {BUSINESS_PHONE}.
              </p>
            )}
            <div className="flex gap-3 pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep(4)}
                className="flex items-center gap-1 text-brand-navy-500"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!canSubmit || submitLead.isPending}
                className="flex-1 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold rounded-xl disabled:opacity-50"
              >
                {submitLead.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Confirm Booking <ChevronRight className="h-4 w-4 ml-1" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* STEP 6: Confirmation */}
        {step === 6 && (
          <div className="text-center space-y-5 py-4">
            <div className="flex justify-center">
              <div className="bg-green-100 rounded-full p-5">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-heading font-black text-brand-navy-900 mb-2">
                We Got Your Request!
              </h3>
              <p className="text-brand-navy-600 text-sm leading-relaxed">
                Thanks, <span className="font-semibold">{form.name}</span>!
                We'll reach out to{" "}
                <span className="font-semibold">{form.phone}</span> shortly to
                confirm your{" "}
                <span className="font-semibold text-brand-orange-600">
                  {form.service}
                </span>{" "}
                appointment.
              </p>
            </div>
            <div className="bg-brand-navy-50 border border-brand-navy-200 rounded-xl p-4 text-sm text-brand-navy-700">
              <p className="font-semibold mb-1">Need to reach us sooner?</p>
              <a
                href={`tel:${BUSINESS_PHONE_TEL}`}
                className="flex items-center justify-center gap-2 text-brand-orange-600 font-bold hover:text-brand-orange-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS_PHONE}
              </a>
            </div>
            <Button
              onClick={handleClose}
              className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold rounded-xl"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
