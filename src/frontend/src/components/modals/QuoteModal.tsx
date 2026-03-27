import ContactForm from "@/components/forms/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQuoteModal } from "@/hooks/useQuoteModal";

export function QuoteModal() {
  const { isOpen, closeQuoteModal } = useQuoteModal();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeQuoteModal()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-brand-navy-900">
            Get a Fast Quote
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you quickly. For
            emergencies, call us directly.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
