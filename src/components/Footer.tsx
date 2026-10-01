import { Phone, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/10 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-widest text-white font-display uppercase block mb-3"
            >
              VORTEX
            </a>
            <p className="text-neutral-300 font-light text-base max-w-sm mb-4">
              « {BUSINESS_INFO.tagline} »
            </p>
            <p className="text-neutral-400 text-xs font-light max-w-md leading-relaxed">
              {/* La destination nocturne et conviviale haut de gamme de Lomé. Pensée pour les cocktails, la musique, les afterworks entre amis et les nuits mémorables. */}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white font-display mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Expérience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white font-display mb-4">
              Contact direct
            </div>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.emailMailto}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="pt-2 text-neutral-400">
                Adresse : Lomé, Togo
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row: Copyright & Back to top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 Spike — Lomé, Togo. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Lieu &amp; de convivialité</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Retour en haut</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}