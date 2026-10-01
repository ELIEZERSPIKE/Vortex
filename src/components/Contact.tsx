import { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, ExternalLink, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#08080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
            Contactez-nous
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            Entrez en contact avec VORTEX
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Contactez-nous directement pour vos réservations, vos soirées privées ou toute demande d'information sur le lieu, à Lomé.
          </p>
        </div>

        {/* 3 Main Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Action 1: Direct Call */}
          <div className="group bg-[#101018] rounded-2xl p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                Ligne directe
              </div>
              <div className="text-xl sm:text-2xl font-bold font-display text-white mb-2 font-mono">
                {BUSINESS_INFO.phoneDisplay}
              </div>
              <p className="text-sm text-neutral-400 font-light mb-6">
                Appelez directement notre équipe pour réserver une table ou obtenir une aide immédiate.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-purple-900/30"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Appeler</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.phoneDisplay, 'phone')}
                title="Copier le numéro de téléphone"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Action 2: WhatsApp Chat */}
          <div className="group bg-[#101018] rounded-2xl p-7 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Réponse instantanée
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300/90 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                  Recommandé
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-display text-white mb-2 font-mono">
                WhatsApp
              </div>
              <p className="text-sm text-neutral-400 font-light mb-6">
                Le moyen le plus rapide pour confirmer une disponibilité, réserver une table ou discuter avec notre équipe.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href={BUSINESS_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-emerald-950/50"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
              </a>
            </div>
          </div>

          {/* Action 3: Email Inquiries */}
          <div className="group bg-[#101018] rounded-2xl p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                E-mail officiel
              </div>
              <div className="text-xl sm:text-2xl font-bold font-display text-white mb-2 break-all">
                {BUSINESS_INFO.email}
              </div>
              <p className="text-sm text-neutral-400 font-light mb-6">
                Pour les événements privés, les événements d'entreprise, les partenariats de marque et toute autre demande.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
              <a
                href={BUSINESS_INFO.emailMailto}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>E-mail</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.email, 'email')}
                title="Copier l'adresse e-mail"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                {copied === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Location & Map Section */}
        <div className="rounded-2xl bg-[#101018] border border-white/10 overflow-hidden">
          <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span>Localisation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                VORTEX — Lomé, Togo
              </h3>
              <p className="text-sm text-neutral-400 font-light mt-1">
                Idéalement situé à Lomé pour vos afterworks et vos nuits de week-end.
              </p>
            </div>

            {/* Address Configuration Note for Owner Presentation */}
            {/* <div className="flex items-center gap-3 bg-purple-950/30 border border-purple-500/20 px-4 py-3 rounded-xl max-w-md">
              <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0 animate-ping" />
              <div className="text-xs text-purple-200/90 font-light">
                <strong>Carte prête à l'intégration :</strong> l'adresse exacte et les coordonnées GPS seront reliées directement à Google Maps pour faciliter l'arrivée des clients.
              </div>
            </div> */}
          </div>

          {/* Interactive Google Maps Placeholder styled to match dark nightlife theme */}
          <div className="relative w-full h-[360px] sm:h-[420px] bg-[#0b0b12] flex items-center justify-center overflow-hidden">
            {/* Embedded interactive map of Lomé, Togo */}
            <iframe
              title="Carte de localisation VORTEX - Lomé, Togo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.83549646487!2d1.1378877546875001!3d6.172573299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3224b5422caf411d!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2stg!4v1700000000000!5m2!1sfr!2stg"
              className="w-full h-full border-0 filter invert contrast-125 hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Location Overlay Badge */}
            <div className="absolute bottom-6 left-6 z-10 bg-[#08080c]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white font-display">
                  VORTEX Lounge
                </span>
              </div>
              <p className="text-xs text-neutral-300 font-light">
                Lomé, Région Maritime, Togo
              </p>
              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-purple-300">
                <span>Coordonnées : 6,1726° N, 1,2314° E</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}