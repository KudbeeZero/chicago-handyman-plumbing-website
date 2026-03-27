import BookingModal from "@/components/modals/BookingModal";
import { Outlet } from "@tanstack/react-router";
import FloatingCallButton from "./FloatingCallButton";
import Footer from "./Footer";
import Header from "./Header";
import MobileCallBar from "./MobileCallBar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
      <MobileCallBar />
      <BookingModal />
    </div>
  );
}
