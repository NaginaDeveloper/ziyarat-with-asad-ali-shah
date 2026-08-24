export interface HeroSlide {
  readonly id: string;
  readonly image: string;
  readonly place: string;
  readonly placeAr: string;
  readonly tourSlug: string;
  readonly credit: string;
}

/** Full-bleed homepage slides — sacred places only, no portraits. */
export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: 'makkah',
    image: 'destinations/kaaba.jpg',
    place: 'Makkah al-Mukarramah',
    placeAr: 'مكة المكرمة',
    tourSlug: 'hajj-umrah',
    credit: 'Kaaba · Basil D Soufi / CC BY-SA',
  },
  {
    id: 'najaf',
    image: 'destinations/najaf.jpg',
    place: 'Najaf al-Ashraf',
    placeAr: 'النجف الأشرف',
    tourSlug: 'iraq-ziyarat',
    credit: 'Imam Ali shrine · Goudarz.memar / CC BY-SA',
  },
  {
    id: 'karbala',
    image: 'destinations/karbala.jpg',
    place: 'Karbala al-Mualla',
    placeAr: 'كربلاء المعلاة',
    tourSlug: 'iraq-ziyarat',
    credit: 'Imam Husayn shrine · Wikimedia Commons',
  },
  {
    id: 'quds',
    image: 'destinations/quds.jpg',
    place: 'Al-Quds',
    placeAr: 'القدس',
    tourSlug: 'al-quds',
    credit: 'Dome of the Rock · Sustructu / CC BY',
  },
  {
    id: 'sarajevo',
    image: 'destinations/sarajevo.jpg',
    place: 'Sarajevo',
    placeAr: 'سراييفو',
    tourSlug: 'bosnia-heritage',
    credit: 'Gazi Husrev-beg Mosque · Wikimedia Commons',
  },
  {
    id: 'bukhara',
    image: 'destinations/bukhara.jpg',
    place: 'Bukhara',
    placeAr: 'بخارى',
    tourSlug: 'uzbekistan-awliya',
    credit: 'Kalyan Minaret · Wikimedia Commons',
  },
];
