export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  SERVICE_EMERGENCY: '/services/emergency-plumbing',
  SERVICE_PLUMBING: '/services/plumbing-sewer',
  SERVICE_DRAIN: '/services/drain-cleaning',
  SERVICE_LEAK: '/services/leak-repair',
  SERVICE_HANDYMAN: '/services/handyman',
  SERVICE_PAINTING: '/services/painting',
  SERVICE_CLEANING: '/services/cleaning',
  SERVICE_POWER_WASHING: '/services/power-washing',
  SERVICE_AREAS: '/service-areas',
  AREA_DUNNING: '/service-areas/dunning',
  AREA_PORTAGE_PARK: '/service-areas/portage-park',
  AREA_IRVING_PARK: '/service-areas/irving-park',
  AREA_JEFFERSON_PARK: '/service-areas/jefferson-park',
  AREA_NORWOOD_PARK: '/service-areas/norwood-park',
  AREA_NORRIDGE: '/service-areas/norridge',
  AREA_BELMONT_CRAGIN: '/service-areas/belmont-cragin',
  AREA_ELMWOOD_PARK: '/service-areas/elmwood-park',
  PRICING: '/pricing',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
  BLOG: '/blog',
  BLOG_PLUMBING_EMERGENCY: '/blog/plumbing-emergency-chicago',
  BLOG_SEWER_PROBLEMS: '/blog/sewer-problems-older-chicago-homes',
  BLOG_SEASONAL_MAINTENANCE: '/blog/seasonal-home-maintenance-chicago',
  BLOG_HANDYMAN_VS_DIY: '/blog/handyman-vs-diy',
  BLOG_WINTER_PLUMBING: '/blog/chicago-winter-plumbing',
} as const;

export const PHONE = '773-647-7598';
export const PHONE_HREF = 'tel:7736477598';
export const BUSINESS_NAME = 'Chicago Handyman & Plumbing';
export const BUSINESS_ADDRESS = 'Dunning, Chicago, IL';
export const STANDARD_HOURS = '7AM–6PM';
export const EMERGENCY_HOURS = '24/7';

export const SERVICES_LIST = [
  { name: 'Emergency Plumbing', path: ROUTES.SERVICE_EMERGENCY, short: 'emergency-plumbing' },
  { name: 'Plumbing & Sewer', path: ROUTES.SERVICE_PLUMBING, short: 'plumbing-sewer' },
  { name: 'Drain Cleaning', path: ROUTES.SERVICE_DRAIN, short: 'drain-cleaning' },
  { name: 'Leak Repair', path: ROUTES.SERVICE_LEAK, short: 'leak-repair' },
  { name: 'Handyman Services', path: ROUTES.SERVICE_HANDYMAN, short: 'handyman' },
  { name: 'Painting Services', path: ROUTES.SERVICE_PAINTING, short: 'painting' },
  { name: 'Cleaning Services', path: ROUTES.SERVICE_CLEANING, short: 'cleaning' },
  { name: 'Power Washing', path: ROUTES.SERVICE_POWER_WASHING, short: 'power-washing' },
] as const;

export const LOCATIONS_LIST = [
  { name: 'Dunning', path: ROUTES.AREA_DUNNING },
  { name: 'Portage Park', path: ROUTES.AREA_PORTAGE_PARK },
  { name: 'Irving Park', path: ROUTES.AREA_IRVING_PARK },
  { name: 'Jefferson Park', path: ROUTES.AREA_JEFFERSON_PARK },
  { name: 'Norwood Park', path: ROUTES.AREA_NORWOOD_PARK },
  { name: 'Norridge', path: ROUTES.AREA_NORRIDGE },
  { name: 'Belmont Cragin', path: ROUTES.AREA_BELMONT_CRAGIN },
  { name: 'Elmwood Park', path: ROUTES.AREA_ELMWOOD_PARK },
] as const;
