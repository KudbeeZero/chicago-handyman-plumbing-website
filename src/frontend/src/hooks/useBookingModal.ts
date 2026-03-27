import {
  type ReactNode,
  createContext,
  createElement,
  useContext,
  useState,
} from "react";

interface BookingModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return createElement(
    BookingModalContext.Provider,
    {
      value: {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      },
    },
    children,
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx)
    throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}
