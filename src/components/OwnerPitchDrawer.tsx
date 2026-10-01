import { X, CheckCircle, ArrowRight, ShieldCheck, Phone, MessageSquare, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface OwnerPitchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export function OwnerPitchDrawer({ isOpen, onClose, onOpenBooking }: OwnerPitchDrawerProps) {
  if (!isOpen) return null;

  const nextSteps = [
    {
      title: 'Photos et médias officiels',
      status: 'Prêt à remplacer',
      detail: 'Les 6 emplacements de visuels de démonstration sont modulaires. Dès que VORTEX aura réalisé de vraies photos du bar, des cocktails et de l\'ambiance, elles s\'intégreront directement dans la galerie haute résolution et la bannière d\'accueil.',
    },
    {
      title: 'Adresse physique et position GPS exactes',
      status: 'Configurable en 1 clic',
      detail: 'La section Google Maps est prête à pointer vers les coordonnées précises de VORTEX à Lomé (par ex. Nyékonakpoè, Kodjoviakopé, Boulevard du 13 Janvier ou Seaside).',
    },
    {
      title: 'Carte des cocktails signature et des bouteilles',
      status: 'Prêt pour l\'intégration de la carte',
      detail: 'Peut s\'enrichir d\'une carte des boissons interactive avec les prix en FCFA, des formules bouteille et des suggestions du chef.',
    },
    {
      title: 'Programmation DJ et agenda des soirées',
      status: 'Prêt pour un module agenda',
      detail: 'Ajoutez le programme hebdomadaire en direct (Afrobeats, Amapiano, Deep House, DJ invités, soirées VIP) avec intégration directe des flyers.',
    },
    {
      title: 'Nom de domaine personnalisé et statistiques',
      status: 'Prêt pour la mise en ligne',
      detail: 'Peut être relié immédiatement à un nom de domaine personnalisé (par ex. vortexlome.com), avec Google Analytics et Meta Pixel pour le suivi publicitaire.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm">
      <div 
        className="w-full max-w-xl h-full bg-[#0c0c14] border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400 mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Proposition commerciale du prototype</span>
              </div>
              <h2 className="text-2xl font-black font-display text-white">
                L'expérience digitale VORTEX
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Value Proposition to Owner */}
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 mb-8">
            <h3 className="text-sm font-bold text-purple-200 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              Pourquoi ce site génère du chiffre d'affaires à Lomé :
            </h3>
            <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside font-light">
              <li><strong>Réservation sans friction :</strong> connexion directe à WhatsApp (+228 97 41 00 76), l'application n°1 des clients à Lomé.</li>
              <li><strong>Conçu d'abord pour le mobile :</strong> performance irréprochable sur iOS &amp; Android, avec des boutons d'action toujours visibles.</li>
              <li><strong>Positionnement premium :</strong> une esthétique nocturne sombre et élégante qui distingue VORTEX de ses concurrents.</li>
              <li><strong>Respect de l'intégrité des données :</strong> aucun prix, horaire ou faux avis non vérifié n'est inventé.</li>
            </ul>
          </div>

          {/* Modular Roadmap */}
          <div className="space-y-4 mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Évolutions prêtes à activer :
            </div>
            {nextSteps.map((step) => (
              <div
                key={step.title}
                className="p-4 rounded-xl bg-[#12121c] border border-white/5 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                    <span>{step.title}</span>
                  </h4>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20">
                    {step.status}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed pl-5.5">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for Presentation */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="text-xs text-neutral-400 flex items-center justify-between">
            <span>Contact client vérifié :</span>
            <span className="font-mono text-white">{BUSINESS_INFO.phoneDisplay}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Tester WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Tester la réservation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}