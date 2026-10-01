import { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/business';
import { Maximize2, Camera, Layers } from 'lucide-react';

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export function Gallery({ onSelectImage }: GalleryProps) {
  const [filter, setFilter] = useState<'all' | 'interior' | 'cocktails' | 'social'>('all');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'interior') return item.id === 'interior' || item.id === 'counter';
    if (filter === 'cocktails') return item.id === 'cocktails';
    if (filter === 'social') return item.id === 'friends' || item.id === 'nightlife' || item.id === 'event';
    return true;
  });

  return (
    <section id="gallery" className="relative py-28 bg-[#09090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Ambiance &amp; Images</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Plongez dans le VORTEX.
            </h2>
          </div>

          {/* Interactive Filter Tabs (functional segmented controls per frontend-design guidelines) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#14141e] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Tout voir ({GALLERY_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('interior')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'interior'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Intérieur &amp; Bar
            </button>
            <button
              type="button"
              onClick={() => setFilter('cocktails')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'cocktails'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Cocktails
            </button>
            <button
              type="button"
              onClick={() => setFilter('social')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'social'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Nuit &amp; Convivialité
            </button>
          </div>
        </div>

        {/* Gallery Notice Banner for Owner Pitch */}
        <div className="mb-8 p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between text-xs text-purple-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400 shrink-0" />
            <span>
              <strong>Galerie photo du lieu :</strong> une sélection de visuels haute résolution (démo) illustrant chaque univers du lieu. Cliquez sur une photo pour l'afficher en haute définition.
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-purple-300/70">
            6/6 emplacements configurés
          </span>
        </div>

        {/* Modern Asymmetric Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isMarquee = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => onSelectImage(item)}
                className={`group relative rounded-2xl overflow-hidden bg-[#101018] border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-950/30 ${
                  isMarquee ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all">
                  <Maximize2 className="w-4 h-4 text-purple-300" />
                </div>

                {/* Bottom Information */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300/80 font-light mt-1 line-clamp-2">
                    {item.caption}
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