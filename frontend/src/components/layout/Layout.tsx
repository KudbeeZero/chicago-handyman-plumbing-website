import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';
import MobileCallBar from './MobileCallBar';
import BookingModal from '@/components/modals/BookingModal';

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
