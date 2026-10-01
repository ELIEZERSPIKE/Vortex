import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, Sparkles, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOccasion?: string;
}

export function ReservationModal({ isOpen, onClose, preselectedOccasion }: ReservationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState('2');
  const [occasion, setOccasion] = useState(preselectedOccasion || 'Sortie nocturne');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedOccasion) {
      setOccasion(preselectedOccasion);
    }
  }, [preselectedOccasion]);

  useEffect(() => {
    // Set default date to today's date in YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  if (!isOpen) return null;

  const occasions = [
    'Sortie nocturne',
    'Afterwork',
    'Anniversaire',
    'Week-end',
    'Célébration',
    'Verres entre amis',
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Veuillez indiquer votre nom et votre numéro de téléphone pour finaliser votre demande de réservation.');
      return;
    }

    const message = `Bonjour VORTEX, je souhaiterais réserver une table :
• Nom : ${name}
• Téléphone / WhatsApp : ${phone}
• Date : ${date}
• Heure : ${time}
• Nombre de personnes : ${guests}
• Occasion : ${occasion}
${notes ? `• Demande spéciale : ${notes}` : ''}`;

    window.open(BUSINESS_INFO.whatsappUrl(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-[#0e0e16] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fermer la fenêtre de réservation"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Demande générée !
            </h3>
            <p className="text-neutral-300 text-sm font-light max-w-sm mx-auto mb-8 leading-relaxed">
              Votre demande de réservation a été lancée via WhatsApp au nom de <strong>{name}</strong> pour le <strong>{date}</strong> à <strong>{time}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Terminé
              </button>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>Appeler directement</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
                <span>Réserver chez VORTEX</span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-black font-display text-white">
                Réserver une table
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm font-light mt-1">
                Lomé, Togo · Confirmation directe par WhatsApp ou par téléphone
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guest-name" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Votre nom *
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    placeholder="ex. Koffi Mensah"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-neutral-500"
                  />
                </div>
                <div>
                  <label htmlFor="guest-phone" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    id="guest-phone"
                    type="tel"
                    required
                    placeholder="+228 90 00 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-neutral-500"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>Date *</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label htmlFor="booking-time" className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>Heure prévue *</span>
                  </label>
                  <select
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm [color-scheme:dark]"
                  >
                    <option value="18:00">18:00 (Coucher du soleil / Afterwork)</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00 (Début de soirée)</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00 (Pic de l'ambiance)</option>
                    <option value="23:00">23:00</option>
                    <option value="00:00">00:00 (Tard dans la nuit)</option>
                    <option value="01:00">01:00</option>
                  </select>
                </div>
              </div>

              {/* Guests count & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-guests" className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    <span>Nombre de personnes</span>
                  </label>
                  <select
                    id="booking-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm [color-scheme:dark]"
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3-4">3 – 4 personnes</option>
                    <option value="5-8">5 – 8 personnes (groupe)</option>
                    <option value="9+">9 personnes et plus (grand groupe)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="booking-occasion" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Occasion / Ambiance
                  </label>
                  <select
                    id="booking-occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm [color-scheme:dark]"
                  >
                    {occasions.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="booking-notes" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Demandes spéciales (facultatif)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  placeholder="ex. préférence pour un espace VIP, gâteau d'anniversaire, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-neutral-500 resize-none"
                />
              </div>

              {/* Submit CTA Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 rounded-xl shadow-lg shadow-purple-950/60 active:scale-98 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>Confirmer par WhatsApp (+228 97 41 00 76)</span>
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 pt-1">
                  <span>Ou appelez directement :</span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-purple-400 hover:text-purple-300 font-mono font-semibold flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}