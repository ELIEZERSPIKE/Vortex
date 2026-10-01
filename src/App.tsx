import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { WhyVortex } from './components/WhyVortex';
import { Gallery } from './components/Gallery';
import { Moments } from './components/Moments';
import { MainCta } from './components/MainCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { LightboxModal } from './components/LightboxModal';
import { MobileActionBar } from './components/MobileActionBar';
import { OwnerPitchDrawer } from './components/OwnerPitchDrawer';
import { GalleryItem } from './data/business';
import { HelpCircle } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState<string | undefined>(undefined);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isPitchGuideOpen, setIsPitchGuideOpen] = useState(false);

  const handleOpenBooking = (occasion?: string) => {
    setSelectedOccasion(occasion);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedOccasion(undefined);
  };

  return (
    <div className="min-h-screen bg-[#07070b] text-neutral-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white pb-14 md:pb-0">
      {/* Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenPitchGuide={() => setIsPitchGuideOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. The VORTEX Experience */}
        <Experience onOpenBooking={(occasion) => handleOpenBooking(occasion)} />

        {/* 3. Why VORTEX */}
        <WhyVortex onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Atmosphere / Gallery */}
        <Gallery onSelectImage={(item) => setLightboxItem(item)} />

        {/* 5. Moments */}
        <Moments onPlanNight={(momentName) => handleOpenBooking(momentName)} />

        {/* 6. Main Call to Action */}
        <MainCta onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar (Book | WhatsApp) */}
      <MobileActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Modals & Overlays */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedOccasion={selectedOccasion}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      <OwnerPitchDrawer
        isOpen={isPitchGuideOpen}
        onClose={() => setIsPitchGuideOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Owner Pitch Button (Discreet in corner) */}
      <button
        type="button"
        onClick={() => setIsPitchGuideOpen(true)}
        title="Owner Proposal Notes & Feature Roadmap"
        className="fixed bottom-18 md:bottom-6 right-4 md:right-6 z-30 flex items-center gap-2 px-3 py-2 rounded-full bg-[#161622]/90 hover:bg-[#202032] border border-purple-500/30 text-purple-300 text-xs font-semibold backdrop-blur-md shadow-xl hover:shadow-purple-900/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
        <span className="hidden sm:inline">Owner Proposal Guide</span>
        <span className="sm:hidden">Proposal</span>
      </button>
    </div>
  );
}
