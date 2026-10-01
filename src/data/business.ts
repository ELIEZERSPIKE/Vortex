/**
 * Données et constantes de VORTEX (version française)
 * Localisation : Lomé, Togo
 * Téléphone & WhatsApp : +228 97 41 00 76
 * E-mail : vortex@gmail.com
 */

import heroImg from '../assets/images/hero_vortex_nightlife_1790849346029.jpg';
import cocktailImg from '../assets/images/bar_cocktails_craft_1790849360311.jpg';
import loungeInteriorImg from '../assets/images/bar_interior_lounge_1790849375248.jpg';
import friendsImg from '../assets/images/friends_social_night_1790849394066.jpg';
import barCounterImg from '../assets/images/bar_counter_mixology_1790849405303.jpg';
import musicEventImg from '../assets/images/nightlife_music_event_1790849419704.jpg';

export const BUSINESS_INFO = {
  name: "VORTEX",
  tagline: "Là où la nuit prend une autre dimension.",
  supportingText: "VORTEX — votre adresse à Lomé pour boire un verre, se retrouver, célébrer et vivre la nuit.",
  location: "Lomé, Togo",
  countryCode: "TG",
  phoneDisplay: "+228 97 41 00 76",
  phoneNumberRaw: "22897410076",
  phoneTel: "tel:+22897410076",
  email: "vortex@gmail.com",
  emailMailto: "mailto:vortex@gmail.com",
  whatsappUrl: (message?: string) => {
    const text = message
      ? encodeURIComponent(message)
      : encodeURIComponent("Bonjour VORTEX, je souhaiterais avoir des informations pour venir ou réserver une table.");
    return `https://wa.me/22897410076?text=${text}`;
  },
};

export const IMAGES = {
  hero: heroImg,
  cocktail: cocktailImg,
  interior: loungeInteriorImg,
  friends: friendsImg,
  counter: barCounterImg,
  music: musicEventImg,
};

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "cocktails",
    title: "Cocktails & Boissons",
    description: "Un espace pour savourer vos boissons et se détendre.",
    image: cocktailImg,
    tag: "Mixologie & Spiritueux",
  },
  {
    id: "atmosphere",
    title: "Musique & Ambiance",
    description: "Une ambiance vivante, pensée pour la nuit.",
    image: musicEventImg,
    tag: "Son & Énergie",
  },
  {
    id: "events",
    title: "Événements & Soirées",
    description: "Un lieu pour des soirées mémorables et des moments de partage.",
    image: loungeInteriorImg,
    tag: "Soirées animées",
  },
  {
    id: "good-times",
    title: "Bons moments",
    description: "Le rendez-vous des amis, des fêtes et des sorties improvisées.",
    image: friendsImg,
    tag: "Convivialité",
  },
];

export interface ValueProp {
  id: string;
  number: string;
  headline: string;
  description: string;
}

export const VALUE_PROPOSITIONS: ValueProp[] = [
  {
    id: "atmosphere",
    number: "01",
    headline: "Une ambiance qui vous marque",
    description: "Un cadre pensé autour de la musique, de la lumière, des rencontres et des nuits inoubliables.",
  },
  {
    id: "spot",
    number: "02",
    headline: "Votre adresse pour la nuit",
    description: "Idéal pour un afterwork, un anniversaire, une sortie entre amis, une célébration ou simplement une pause.",
  },
  {
    id: "destination",
    number: "03",
    headline: "Une destination à Lomé",
    description: "VORTEX, un lieu à découvrir et où l'on aime revenir.",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "tall" | "wide" | "standard";
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "interior",
    title: "Intérieur moderne",
    category: "Lieu & Design",
    image: loungeInteriorImg,
    aspect: "wide",
    caption: "Un décor soigné : éclairage architectural, banquettes confortables et esthétique urbaine intimiste, au cœur de Lomé.",
  },
  {
    id: "cocktails",
    title: "Cocktails artisanaux",
    category: "Bar signature",
    image: cocktailImg,
    aspect: "standard",
    caption: "Spiritueux premium, garnitures locales fraîches et recettes faites main, créés pour se détendre.",
  },
  {
    id: "friends",
    title: "Moments entre amis",
    category: "Vie sociale",
    image: friendsImg,
    aspect: "standard",
    caption: "Le point de rendez-vous idéal pour célébrer l'amitié, les grandes occasions et les belles soirées.",
  },
  {
    id: "nightlife",
    title: "Ambiance nocturne",
    category: "Atmosphère",
    image: heroImg,
    aspect: "wide",
    caption: "Lumières tamisées, tons violets profonds et ambiance lounge raffinée.",
  },
  {
    id: "counter",
    title: "Le comptoir du bar",
    category: "Espace mixologie",
    image: barCounterImg,
    aspect: "standard",
    caption: "Un comptoir central avec un large choix de boissons et un service attentionné.",
  },
  {
    id: "event",
    title: "Soirées & Énergie",
    category: "Expérience nocturne",
    image: musicEventImg,
    aspect: "standard",
    caption: "Là où la vie nocturne de Lomé s'anime, au rythme de la musique et de la culture night contemporaine.",
  },
];

export interface MomentItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
}

export const MOMENTS_ITEMS: MomentItem[] = [
  {
    id: "afterwork",
    name: "Afterwork",
    subtitle: "Se détendre avec style",
    description: "Un endroit pour décompresser après une longue journée.",
    badge: "En semaine & au coucher du soleil",
    image: barCounterImg,
  },
  {
    id: "night-out",
    name: "Sortie nocturne",
    subtitle: "Énergie & rythme",
    description: "De la bonne musique, des boissons, des amis et une autre ambiance.",
    badge: "La nuit",
    image: musicEventImg,
  },
  {
    id: "birthday",
    name: "Anniversaire",
    subtitle: "Fêtez votre grand jour",
    description: "Un cadre idéal pour célébrer les moments importants.",
    badge: "Occasions spéciales",
    image: friendsImg,
  },
  {
    id: "weekend",
    name: "Week-end",
    subtitle: "La nuit sans filtre",
    description: "Votre destination pour les nuits de week-end à Lomé.",
    badge: "Vendredi & Samedi",
    image: loungeInteriorImg,
  },
];