import { MOMENTS_ITEMS } from '../data/business';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface MomentsProps {
  onPlanNight: (momentName: string) => void;
}

export function Moments({ onPlanNight }: MomentsProps) {
  return (
    <section id="moments" className="relative py-28 bg-[#07070b] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>La nuit sur mesure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
            Les moments VORTEX
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Chaque occasion a son propre rythme. Découvrez les différentes ambiances qui vous attendent à Lomé.
          </p>
        </div>

        {/* 4 Moments Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOMENTS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-[#101018] border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between p-6 min-h-[400px] shadow-lg hover:shadow-2xl hover:shadow-purple-950/40"
            >
              {/* Background Image with Dark Gradient Scrim */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-65 group-hover:brightness-85"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/80 to-black/30" />
                <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Card Header Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  {item.badge}
                </span>
              </div>

              {/* Card Bottom Body & Action */}
              <div className="relative z-10 pt-20">
                <div className="text-xs uppercase tracking-wider font-semibold text-purple-400 mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Direct CTA */}
                <button
                  type="button"
                  onClick={() => onPlanNight(item.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-purple-600 rounded-xl border border-white/10 hover:border-purple-500 transition-all duration-200 cursor-pointer shadow-md group-hover:shadow-purple-900/50"
                >
                  <Calendar className="w-3.5 h-3.5 text-purple-300 group-hover:text-white" />
                  <span>Planifier ma soirée</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}