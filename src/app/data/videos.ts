export interface JourneyVideo {
  readonly id: string;
  readonly title: string;
  readonly place: string;
}

export const JOURNEY_VIDEOS: readonly JourneyVideo[] = [
  {
    id: 'cMUCmKsQZVo',
    title: 'Maqam of Prophet Dawud (as) on Jabal Sahyun',
    place: 'Jerusalem',
  },
  {
    id: 'f91Sj9Muf9E',
    title: 'Ziyarat of Salman al-Farsi (ra)',
    place: 'Madaen, Iraq',
  },
  {
    id: '0EnHpLjyWUQ',
    title: 'Ziyarat of Hudhayfah ibn al-Yaman (ra)',
    place: 'Madaen, Iraq',
  },
  {
    id: '6TQdB0_gVbA',
    title: 'Son of Jabir ibn Abd Allah al-Ansari (ra)',
    place: 'Madaen, Iraq',
  },
  {
    id: 'aNTcKFykOQE',
    title: 'Original shrine of Ma‘ruf al-Karkhi in the cave',
    place: 'Baghdad, Iraq',
  },
  {
    id: 'aED5yEdz-vc',
    title: 'Night ziyarat of Ma‘ruf al-Karkhi',
    place: 'Baghdad, Iraq',
  },
  {
    id: 'WfWNAqSQUqw',
    title: 'The cave where Ibrahim (as) was born',
    place: 'Hillah, Babylon',
  },
  {
    id: 'IV2M7TseQVg',
    title: 'The blessed well of Prophet Ayyub (as)',
    place: 'Iraq',
  },
  {
    id: '0E9eCCEWpHM',
    title: 'Palace of Kisra and the night of the Prophet’s ﷺ birth',
    place: 'Madaen, Iraq',
  },
  {
    id: 'WD9JFZ2I-f4',
    title: 'Those who spread Islam in Bosnia',
    place: 'Sarajevo',
  },
  {
    id: 'UO2-XIgpxrk',
    title: 'Where the First World War began',
    place: 'Sarajevo',
  },
  {
    id: '_5doQkutGh0',
    title: 'Milad and salawat of the people of Yemen',
    place: 'Yemen',
  },
  {
    id: '3nj-Sbn237Y',
    title: 'Useful notes for Hajj — share as sadaqah jariyah',
    place: 'Makkah & Madinah',
  },
];

export function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youtubeThumbUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube.com/embed/${id}`;
}
