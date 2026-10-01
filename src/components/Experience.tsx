import { ArrowUpRight, Wine, Music, Sparkles, HeartHandshake } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/business';

interface ExperienceProps {
  onOpenBooking: (occasion?: string) => void;
}

export function Experience({ onOpenBooking }: ExperienceProps) {
  const icons = [Wine, Music, Sparkles, HeartHandshake];

  // const purposes = [
  //   'Retrouver ses amis',
  //   'Savourer un verre',
  //   'Écouter de la musique',
  //   'Célébrer',
  //   'Se détendre après le travail',
  //   'Profiter de la nuit',
  //   'Créer des souvenirs inoubliables',
  // ];

  return (
    <section id="experience" className="relative py-28 bg-[#09090f] overflow-hidden">
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">
            Le concept
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
            Plus qu'un bar. Une expérience.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
            VORTEX est pour ceux qui aiment une ambiance raffinée, une énergie électrique et de vraies rencontres.
          </p>

          {/* Core Intentions Grid / Clean typography tags */}
          {/* <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mr-1">
              Un lieu pour :
            </span>
            {purposes.map((purpose, index) => (
              <span key={purpose} className="inline-flex items-center text-xs text-neutral-300">
                <span className="text-purple-300 font-medium">{purpose}</span>
                {index < purposes.length - 1 && (
                  <span className="mx-2 text-neutral-600" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div> */}
        </div>

        {/* 4 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCE_ITEMS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.id}
                onClick={() => onOpenBooking(item.title)}
                className="group relative rounded-2xl overflow-hidden bg-[#101018] border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-end min-h-[380px] p-6 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-950/40"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-75 group-hover:brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-[#09090f]/75 to-transparent" />
                  <div className="absolute inset-0 bg-purple-950/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-400/30 flex items-center justify-center text-purple-300 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/80 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-purple-300 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-sm text-neutral-300/90 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}