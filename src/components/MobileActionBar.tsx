import { Calendar, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export function MobileActionBar({ onOpenBooking }: MobileActionBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08080c]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 shadow-2xl">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Book a Table */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 active:scale-98 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-900/50 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-purple-200" />
          <span>Réserver</span>
        </button>

        {/* WhatsApp */}
        <a
          href={BUSINESS_INFO.whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 active:scale-98 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50"
        >
          <MessageSquare className="w-4 h-4 text-emerald-200" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}