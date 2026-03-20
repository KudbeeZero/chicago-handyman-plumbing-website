import {
  Wrench,
  Droplets,
  Zap,
  Home,
  Paintbrush,
  Sparkles,
  Wind,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceIconConfig {
  icon: LucideIcon;
  label: string;
  color: string;
}

export const SERVICE_ICONS: Record<string, ServiceIconConfig> = {
  'emergency-plumbing': { icon: AlertTriangle, label: 'Emergency Plumbing', color: 'text-brand-red' },
  'plumbing-sewer': { icon: Droplets, label: 'Plumbing & Sewer', color: 'text-navy' },
  'drain-cleaning': { icon: Zap, label: 'Drain Cleaning', color: 'text-navy' },
  'leak-repair': { icon: Wrench, label: 'Leak Repair', color: 'text-navy' },
  'handyman': { icon: Home, label: 'Handyman Services', color: 'text-navy' },
  'painting': { icon: Paintbrush, label: 'Painting Services', color: 'text-navy' },
  'cleaning': { icon: Sparkles, label: 'Cleaning Services', color: 'text-navy' },
  'power-washing': { icon: Wind, label: 'Power Washing', color: 'text-navy' },
};
