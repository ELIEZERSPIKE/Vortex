import { Calendar, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/business';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07070b]">
      {/* Background Image with Deep Night Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Ambiance d'un lounge nocturne moderne"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-90 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark overlay for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070b] via-[#07070b]/75 to-[#07070b]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        
        {/* Location Indicator & Tag */}
      

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[1.08] max-w-4xl text-balance mb-6 drop-shadow-sm">
          Là où la vos sorties prennent{' '}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent underline decoration-purple-500/40 decoration-wavy underline-offset-8">
            une autre dimension.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
          {BUSINESS_INFO.supportingText}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 rounded-xl hover:from-purple-500 hover:to-indigo-600 hover:shadow-2xl hover:shadow-purple-600/40 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shadow-purple-900/50"
          >
            <Calendar className="w-4 h-4 text-purple-200" />
            <span>Réserver une table</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#experience"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl hover:border-white/30 backdrop-blur-sm active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Découvrir VORTEX</span>
          </a>
        </div>

        {/* Demo Photography Notice (for Owner Pitch Transparency) */}
        {/* <div className="mt-14 inline-flex items-center gap-2 text-[11px] text-neutral-400 bg-black/40 px-3 py-1 rounded-md border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Aperçu du prototype interactif · Prêt à intégrer les photos et médias officiels de VORTEX</span>
        </div> */}
      </div>

      {/* Down Chevron Indicator */}
      <a
        href="#experience"
        aria-label="Faire défiler pour explorer"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-neutral-400 hover:text-white transition-colors duration-200 p-2"
      >
      </a>
    </section>
  );
}