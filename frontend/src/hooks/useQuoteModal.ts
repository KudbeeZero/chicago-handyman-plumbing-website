import { createContext, useContext, useState, useCallback } from 'react';

interface QuoteModalContextType {
  isOpen: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

export const QuoteModalContext = createContext<QuoteModalContextType>({
  isOpen: false,
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}

export function useQuoteModalState() {
  const [isOpen, setIsOpen] = useState(false);
  const openQuoteModal = useCallback(() => setIsOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);
  return { isOpen, openQuoteModal, closeQuoteModal };
}
