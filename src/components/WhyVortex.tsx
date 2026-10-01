import { VALUE_PROPOSITIONS, IMAGES } from '../data/business';
import { ArrowRight, Compass, Sparkles, Moon } from 'lucide-react';

interface WhyVortexProps {
  onOpenBooking: () => void;
}

export function WhyVortex({ onOpenBooking }: WhyVortexProps) {
  const icons = [Sparkles, Moon, Compass];

  return (
    <section id="why-vortex" className="relative py-28 bg-[#07070b] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
              L'identité
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Pourquoi VORTEX
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Conçu pour le public exigeant de Lomé, en quête d'une nuit de qualité : une musique soignée, une esthétique raffinée et une énergie magnétique.
          </p>
        </div>

        {/* 3 Main Value Propositions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={prop.id}
                className="group relative bg-[#0e0e16] rounded-2xl p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-purple-950/30"
              >
                {/* Top Row: Index number & icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-extrabold text-purple-400/70 group-hover:text-purple-300 transition-colors">
                      {prop.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white mb-4 leading-snug group-hover:text-purple-200 transition-colors">
                    « {prop.headline} »
                  </h3>

                  <p className="text-neutral-300/90 text-base leading-relaxed font-light mb-8">
                    {prop.description}
                  </p>
                </div>

                {/* Bottom interactive link */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-purple-400/80 group-hover:text-purple-300">
                  <span>Vivez cette ambiance</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Spotlight Bar */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#10101a] to-indigo-950/40 border border-purple-500/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 hidden sm:block">
              <img
                src={IMAGES.interior}
                alt="Le lounge VORTEX"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-white font-bold font-display text-lg sm:text-xl">
                Prêt à vivre la nuit lomélaise autrement ?
              </div>
              <p className="text-neutral-300 text-sm font-light mt-1">
                Pour passer en fin de soirée ou organiser un événement privé.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-lg cursor-pointer"
          >
            Réserver ma place
          </button>
        </div>
      </div>
    </section>
  );
}