import Layout from "@/components/layout/Layout";
import { BookingModalProvider } from "@/hooks/useBookingModal";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing";
import ServiceAreasHub from "@/pages/ServiceAreasHub";
import ServicesHub from "@/pages/ServicesHub";
import HandymanVsDIY from "@/pages/blog/HandymanVsDIY";
import PlumbingEmergency from "@/pages/blog/PlumbingEmergency";
import SeasonalMaintenance from "@/pages/blog/SeasonalMaintenance";
import SewerProblems from "@/pages/blog/SewerProblems";
import WinterPlumbing from "@/pages/blog/WinterPlumbing";
import BelmontCragin from "@/pages/locations/BelmontCragin";
import Dunning from "@/pages/locations/Dunning";
import ElmwoodPark from "@/pages/locations/ElmwoodPark";
import IrvingPark from "@/pages/locations/IrvingPark";
import JeffersonPark from "@/pages/locations/JeffersonPark";
import Norridge from "@/pages/locations/Norridge";
import NorwoodPark from "@/pages/locations/NorwoodPark";
import PortagePark from "@/pages/locations/PortagePark";
import Cleaning from "@/pages/services/Cleaning";
import DrainCleaning from "@/pages/services/DrainCleaning";
import EmergencyPlumbing from "@/pages/services/EmergencyPlumbing";
import Handyman from "@/pages/services/Handyman";
import LeakRepair from "@/pages/services/LeakRepair";
import Painting from "@/pages/services/Painting";
import PlumbingSewer from "@/pages/services/PlumbingSewer";
import PowerWashing from "@/pages/services/PowerWashing";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesHub,
});
const emergencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/emergency-plumbing",
  component: EmergencyPlumbing,
});
const plumbingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/plumbing-sewer",
  component: PlumbingSewer,
});
const drainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/drain-cleaning",
  component: DrainCleaning,
});
const leakRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/leak-repair",
  component: LeakRepair,
});
const handymanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/handyman",
  component: Handyman,
});
const paintingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/painting",
  component: Painting,
});
const cleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/cleaning",
  component: Cleaning,
});
const powerWashingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/power-washing",
  component: PowerWashing,
});
const serviceAreasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas",
  component: ServiceAreasHub,
});
const dunningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas/dunning",
  component: Dunning,
});
const portageParkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas/portage-park",
  component: PortagePark,
});
const irvingParkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas/irving-park",
  component: IrvingPark,
});
const jeffersonParkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas/jefferson-park",
  component: JeffersonPark,
});
const norwoodParkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas/norwood-park",
  component: NorwoodPark,
});
const norridgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas/norridge",
  component: Norridge,
});
const belmontCraginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas/belmont-cragin",
  component: BelmontCragin,
});
const elmwoodParkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service-areas/elmwood-park",
  component: ElmwoodPark,
});
const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: Pricing,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQ,
});
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: Blog,
});
const blogEmergencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/plumbing-emergency",
  component: PlumbingEmergency,
});
const blogSewerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/sewer-problems",
  component: SewerProblems,
});
const blogSeasonalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/seasonal-maintenance",
  component: SeasonalMaintenance,
});
const blogHandymanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/handyman-vs-diy",
  component: HandymanVsDIY,
});
const blogWinterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/winter-plumbing",
  component: WinterPlumbing,
});
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  emergencyRoute,
  plumbingRoute,
  drainRoute,
  leakRoute,
  handymanRoute,
  paintingRoute,
  cleaningRoute,
  powerWashingRoute,
  serviceAreasRoute,
  dunningRoute,
  portageParkRoute,
  irvingParkRoute,
  jeffersonParkRoute,
  norwoodParkRoute,
  norridgeRoute,
  belmontCraginRoute,
  elmwoodParkRoute,
  pricingRoute,
  aboutRoute,
  contactRoute,
  faqRoute,
  blogRoute,
  blogEmergencyRoute,
  blogSewerRoute,
  blogSeasonalRoute,
  blogHandymanRoute,
  blogWinterRoute,
  notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <BookingModalProvider>
      <RouterProvider router={router} />
    </BookingModalProvider>
  );
}
