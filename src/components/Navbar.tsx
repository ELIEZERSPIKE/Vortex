import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface NavbarProps {
  onOpenBooking: (occasion?: string) => void;
  onOpenPitchGuide: () => void;
}

export function Navbar({ onOpenBooking, onOpenPitchGuide }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Ambiance', href: '#why-vortex' },
    { label: 'Moments', href: '#moments' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08080c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              className="text-2xl sm:text-3xl font-extrabold tracking-widest text-white font-display hover:text-purple-400 transition-colors uppercase"
            >
              VORTEX
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenPitchGuide}
                title="Notes de présentation du prototype pour le propriétaire de VORTEX"
                className="hidden xl:inline-flex items-center text-[11px] font-semibold uppercase tracking-wider text-purple-300/80 hover:text-purple-200 px-2.5 py-1.5 rounded border border-purple-500/20 bg-purple-950/20 hover:bg-purple-950/40 transition-colors"
              >
                Notes de proposition
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 rounded-lg hover:from-purple-500 hover:to-indigo-600 active:scale-98 transition-all duration-200 shadow-lg shadow-purple-950/50 hover:shadow-purple-600/30 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Réserver une table</span>
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg"
                aria-label="Ouvrir ou fermer le menu de navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#08080c]/98 backdrop-blur-2xl">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-extrabold tracking-widest text-white font-display uppercase"
            >
              VORTEX
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-400 hover:text-white rounded-lg"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold font-display tracking-wide text-neutral-200 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg shadow-purple-900/40"
              >
                <Calendar className="w-4 h-4" />
                Réserver une table
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-xl hover:bg-emerald-900/30 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Discuter sur WhatsApp
              </a>

              <div className="flex items-center justify-center gap-6 pt-2 text-xs text-neutral-400">
                <a href={BUSINESS_INFO.phoneTel} className="flex items-center gap-1.5 hover:text-white">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                <span>·</span>
                <span>Lomé, Togo</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}