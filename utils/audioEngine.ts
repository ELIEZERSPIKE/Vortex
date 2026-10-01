/**
 * MOTEUR AUDIO POUR L'HOMMAGE ÉMOTIONNEL
 * Conforme à la politique des navigateurs et respect de l'utilisateur :
 * - Ne démarre JAMAIS automatiquement sans interaction
 * - S'active/se désactive via un bouton discret (icône note de musique)
 * - Une fois activée, la musique reste audible sur TOUTE la page,
 *   quelle que soit la section affichée au scroll.
 * - Intègre une synthèse harmonique douce (accords de piano/cordes d'ambiance en La mineur / Ré mineur)
 *   en plus du support pour le fichier audio personnalisé (/assets/audio/musique-hommage.mp3).
 */

class MemorialAudioEngine {
  private audioCtx: AudioContext | null = null;
  private isSynthesizing = false;
  private synthInterval: any = null;
  private gainNode: GainNode | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private userWantsAudio = false;
  private subscribers: Array<(state: { isPlaying: boolean; volume: number }) => void> = [];

  constructor() {
    // Initialisé sans rien démarrer
  }

  public subscribe(cb: (state: { isPlaying: boolean; volume: number }) => void) {
    this.subscribers.push(cb);
    this.notify();
    return () => {
      this.subscribers = this.subscribers.filter(fn => fn !== cb);
    };
  }

  private notify() {
    const isPlaying = this.userWantsAudio;
    this.subscribers.forEach(cb => cb({ isPlaying, volume: 0.7 }));
  }

  /**
   * Appelé par l'utilisateur lors du clic sur le bouton note de musique
   */
  public toggleUserAudio(customAudioUrl?: string): boolean {
    if (this.userWantsAudio) {
      this.fadeOutAndStop();
      this.userWantsAudio = false;
    } else {
      this.userWantsAudio = true;
      this.startSound(customAudioUrl);
    }
    this.notify();
    return this.userWantsAudio;
  }

  public getUserWantsAudio(): boolean {
    return this.userWantsAudio;
  }

  public isCurrentlyAudible(): boolean {
    return this.userWantsAudio;
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
        this.gainNode = this.audioCtx.createGain();
        this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
        this.gainNode.connect(this.audioCtx.destination);
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  private startSound(customAudioUrl?: string) {
    // Si un fichier mp3 externe existe et est spécifié, on tente de le jouer
    if (customAudioUrl && customAudioUrl.endsWith('.mp3')) {
      if (!this.audioElement) {
        this.audioElement = new Audio(customAudioUrl);
        this.audioElement.loop = true;
        this.audioElement.volume = 0.5;
        this.audioElement.onerror = () => {
          // Fallback gracieux vers la synthèse sereine intégrée si le fichier mp3 n'a pas encore été déposé
          this.startPeacefulSynthesizer();
        };
      }
      this.audioElement.play().catch(() => {
        // En cas de restriction de fichier, lancer le synthé d'ambiance
        this.startPeacefulSynthesizer();
      });
      return;
    }

    // Sinon, génère une douce nappe harmonique méditative
    this.startPeacefulSynthesizer();
  }

  /**
   * Génère une composition harmonique douce, apaisante et émouvante (piano & cordes)
   * avec des fréquences pures, un filtre résonant doux et une réverbération spatiale
   */
  private startPeacefulSynthesizer() {
    this.initAudioContext();
    if (!this.audioCtx || !this.gainNode) return;

    if (this.isSynthesizing) return;
    this.isSynthesizing = true;

    // Fade in en 1.5 seconde
    const now = this.audioCtx.currentTime;
    this.gainNode.gain.cancelScheduledValues(now);
    this.gainNode.gain.setValueAtTime(0.01, now);
    this.gainNode.gain.linearRampToValueAtTime(0.25, now + 1.5);

    // Accords solennels et apaisants en Ré mineur / Fa Majeur / Sib Majeur
    // (D minor -> F major -> Bb major -> A minor)
    const chords = [
      [146.83, 220.00, 261.63, 349.23], // D3, A3, C4, F4
      [174.61, 261.63, 329.63, 440.00], // F3, C4, E4, A4
      [116.54, 233.08, 293.66, 349.23], // Bb2, Bb3, D4, F4
      [110.00, 220.00, 261.63, 329.63], // A2, A3, C4, E4
    ];

    let chordIndex = 0;
    const playChord = () => {
      if (!this.audioCtx || !this.gainNode || !this.isSynthesizing) return;
      const notes = chords[chordIndex % chords.length];
      chordIndex++;

      notes.forEach((freq, idx) => {
        if (!this.audioCtx || !this.gainNode) return;
        const osc = this.audioCtx.createOscillator();
        const noteGain = this.audioCtx.createGain();
        const filter = this.audioCtx.createBiquadFilter();

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600 + idx * 100, this.audioCtx.currentTime);

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        const startTime = this.audioCtx.currentTime + idx * 0.15;
        const noteDuration = 4.2;

        noteGain.gain.setValueAtTime(0.001, startTime);
        noteGain.gain.exponentialRampToValueAtTime(0.08 / (idx + 1), startTime + 1.2);
        noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(this.gainNode);

        osc.start(startTime);
        osc.stop(startTime + noteDuration + 0.5);
      });
    };

    playChord();
    this.synthInterval = setInterval(playChord, 4500);
  }

  private fadeOutAndStop() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.audioCtx && this.gainNode && this.isSynthesizing) {
      const now = this.audioCtx.currentTime;
      this.gainNode.gain.cancelScheduledValues(now);
      this.gainNode.gain.linearRampToValueAtTime(0.001, now + 1.2);
      setTimeout(() => {
        this.pause();
      }, 1300);
    } else {
      this.pause();
    }
  }

  private pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    this.isSynthesizing = false;
  }
}

export const memorialAudio = new MemorialAudioEngine();