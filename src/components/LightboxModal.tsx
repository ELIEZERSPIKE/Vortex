import { useEffect } from 'react';
import { X, Camera } from 'lucide-react';
import { GalleryItem } from '../data/business';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#0c0c14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-colors cursor-pointer"
          aria-label="Fermer l'aperçu de l'image"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative aspect-video sm:aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Description & Transparency Bar */}
        <div className="p-6 bg-[#0f0f18] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block text-[11px] font-semibold uppercase tracking-wider text-purple-400 mb-1">
              {item.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-300 font-light mt-1 max-w-xl">
              {item.caption}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs text-neutral-400 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
            <Camera className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Prêt pour les vrais médias de VORTEX</span>
          </div>
        </div>
      </div>
    </div>
  );
}