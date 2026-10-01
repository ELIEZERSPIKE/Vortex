import { Calendar, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/business';

interface MainCtaProps {
  onOpenBooking: () => void;
}

export function MainCta({ onOpenBooking }: MainCtaProps) {
  return (
    <section className="relative py-32 bg-[#060609] overflow-hidden">
      {/* Background Graphic & Glows */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={IMAGES.hero}
          alt="Ambiance nocturne chez VORTEX"
          className="w-full h-full object-cover object-center filter blur-sm scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060609] via-[#060609]/90 to-[#060609]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Glow pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Réservations &amp; Renseignements</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mb-6 text-balance leading-[1.1]">
          Votre prochaine nuit commence ici.
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed mb-12 text-balance">
          Une table, quelques amis, la bonne ambiance. Il ne manque plus que vous.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 rounded-xl hover:from-purple-500 hover:to-indigo-600 hover:shadow-2xl hover:shadow-purple-600/40 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shadow-purple-950/60"
          >
            <Calendar className="w-4 h-4 text-purple-200" />
            <span>Réserver une table</span>
          </button>

          {/* Secondary CTA: WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-400/50 rounded-xl backdrop-blur-sm active:scale-95 transition-all duration-200 shadow-lg shadow-emerald-950/30"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp · +228 97 41 00 76</span>
          </a>

          {/* Direct Call Button */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
            title="Appel téléphonique direct"
          >
            <PhoneCall className="w-4 h-4 text-purple-400" />
            <span className="sm:hidden">Appeler maintenant</span>
          </a>
        </div>
      </div>
    </section>
  );
}