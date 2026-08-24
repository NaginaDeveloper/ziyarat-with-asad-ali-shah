export interface TourStop {
  readonly place: string;
  readonly note: string;
}

export interface Tour {
  readonly slug: string;
  readonly title: string;
  readonly region: string;
  readonly duration: string;
  readonly group: string;
  readonly summary: string;
  readonly story: string;
  readonly imageVideoId: string;
  readonly includes: readonly string[];
  readonly stops: readonly TourStop[];
}

export const TOURS: readonly Tour[] = [
  {
    slug: 'iraq-ziyarat',
    title: 'Iraq Ziyarat',
    region: 'Najaf · Karbala · Baghdad · Madaen',
    duration: '10–14 days',
    group: 'UK travelling group',
    summary:
      'A guided ziyarat of Iraq’s blessed cities — shrines of the Ahl al-Bayt, the companions, and the awliya — with history explained at each maqam.',
    story:
      'This is the journey many of our travellers remember most. The group visits Baghdad Sharif, Najaf al-Ashraf and Karbala al-Mualla, with time at Kadhimain and Madaen. Syed Asad Ali Shah walks the ziyarat with you: who is buried here, why the site matters, and how to keep adab. Past groups have stood at the shrines of Imam Ali (as), Imam Hussain (as), Salman al-Farsi (ra), Hudhayfah ibn al-Yaman (ra), and Ma‘ruf al-Karkhi (rah).',
    imageVideoId: 'f91Sj9Muf9E',
    includes: [
      'Scholar-led ziyarat at each shrine',
      'History of the Ahl al-Bayt, sahaba and awliya',
      'Group travel from the UK',
      'Time for dua, ziyarat, and rest between cities',
    ],
    stops: [
      { place: 'Najaf al-Ashraf', note: 'Shrine of Imam Ali ibn Abi Talib (as) and Wadi as-Salaam.' },
      { place: 'Karbala al-Mualla', note: 'Shrines of Imam Hussain (as) and Hazrat Abbas (as).' },
      { place: 'Baghdad Sharif', note: 'Kadhimain, and the resting places of Baghdad’s saints including Ma‘ruf al-Karkhi.' },
      { place: 'Madaen', note: 'Salman al-Farsi (ra), Hudhayfah ibn al-Yaman (ra), and the family of Jabir ibn Abd Allah (ra).' },
      { place: 'Hillah & Babylon', note: 'Sites linked to Ibrahim (as) and Ayyub (as), when the itinerary allows.' },
    ],
  },
  {
    slug: 'hajj-umrah',
    title: 'Hajj & Umrah',
    region: 'Makkah · Madinah',
    duration: 'Seasonal',
    group: 'UK pilgrims',
    summary:
      'Useful, practical guidance for Hajj and Umrah — rites, ziyarat in the Two Holy Mosques, and how to keep the journey sincere.',
    story:
      'Hajj and Umrah are not packaged as a luxury holiday. The emphasis is on correct rites, ziyarat of Madinah, and preparing the heart. Ask for the current season’s dates, flights, and what the group will cover in Makkah and Madinah. Share the details with family — this work is intended as sadaqah jariyah of knowledge, not a sales pitch.',
    imageVideoId: '3nj-Sbn237Y',
    includes: [
      'Guidance on Hajj and Umrah rites',
      'Ziyarat of Madinah al-Munawwarah',
      'UK group coordination',
      'Clear, seasonal information before you book',
    ],
    stops: [
      { place: 'Makkah al-Mukarramah', note: 'Masjid al-Haram, the rites of Hajj or Umrah, and nearby ziyarat as time allows.' },
      { place: 'Madinah al-Munawwarah', note: 'Masjid an-Nabawi, Jannat al-Baqi, Uhud, and the masajid of Madinah.' },
    ],
  },
  {
    slug: 'al-quds',
    title: 'Al-Quds & blessed Palestine',
    region: 'Jerusalem · surrounding maqamat',
    duration: 'By enquiry',
    group: 'Small UK group',
    summary:
      'Ziyarat of Al-Quds — Masjid al-Aqsa, the Dome of the Rock, and nearby prophetic sites such as the resting place of Dawud (as).',
    story:
      'When travel is possible, this journey is about witnessing the third haram and the prophetic landscape around it. Footage from Jabal Sahyun (Mount Zion) and the maqam associated with Dawud (as) is shared on the channel so those who cannot travel can still see the sites. Enquire for current access, safety, and group dates — we will only run a trip when it is responsible to do so.',
    imageVideoId: 'cMUCmKsQZVo',
    includes: [
      'Context of Masjid al-Aqsa and Al-Quds',
      'Prophetic sites around Jerusalem',
      'Small-group, scholar-led visits',
      'Honest advice if travel is not possible that season',
    ],
    stops: [
      { place: 'Masjid al-Aqsa', note: 'The third haram, insha’Allah, with time for salah and dua.' },
      { place: 'Qubbat as-Sakhrah', note: 'The Dome of the Rock and the noble sanctuary.' },
      { place: 'Jabal Sahyun', note: 'Sites linked to Dawud (as), mentioned sixteen times in the Qur’an.' },
    ],
  },
  {
    slug: 'uzbekistan-awliya',
    title: 'Uzbekistan — cities of the awliya',
    region: 'Bukhara · Tashkent',
    duration: '7–10 days',
    group: 'UK travelling group',
    summary:
      'Ziyarat of Central Asian saints — Shah Naqshband in Bukhara and the Suhrawardi heritage of Tashkent — with the silsilah explained on site.',
    story:
      'Bukhara and Tashkent hold the graves of imams who shaped the spiritual life of the Ummah. The group visits the shrine of Syed Bahauddin Naqshband Bukhari and related maqamat, including Shaykh Zainuddin Suhrawardi in Tashkent. This is a quieter ziyarat: architecture, silsilah, and time to sit at the graves of those who carried Islam across Transoxiana.',
    imageVideoId: 'aNTcKFykOQE',
    includes: [
      'Naqshbandi and Suhrawardi ziyarat',
      'Silsilah and history at each shrine',
      'Bukhara and Tashkent in one journey',
      'UK group flights and local guidance',
    ],
    stops: [
      { place: 'Bukhara', note: 'Shrine of Shah Naqshband, Syed Bahauddin Naqshband Bukhari.' },
      { place: 'Tashkent', note: 'Shrine of Shaykh Zainuddin Suhrawardi, son of Shaykh Shihabuddin Suhrawardi.' },
    ],
  },
  {
    slug: 'bosnia-heritage',
    title: 'Bosnia — Islam in Europe',
    region: 'Sarajevo and beyond',
    duration: '5–8 days',
    group: 'UK travelling group',
    summary:
      'A heritage ziyarat of Bosnia: how Islam took root in Europe, the mosques of Sarajevo, and the places where history turned.',
    story:
      'Bosnia is where many UK travellers first see a living European Muslim civilisation. The itinerary includes Sarajevo’s historic mosques, the story of those who spread Islam in the Balkans, and sites of modern history including where the First World War began. It is taught as ziyarat and dars, not as dark tourism.',
    imageVideoId: 'WD9JFZ2I-f4',
    includes: [
      'Ottoman and Bosnian Islamic heritage',
      'Scholar-led walks in Sarajevo',
      'Context of Islam in Europe',
      'UK group travel',
    ],
    stops: [
      { place: 'Sarajevo', note: 'Historic mosques, the old town, and the figures who spread Islam in Bosnia.' },
      { place: 'Twentieth-century sites', note: 'Places of memory, including where the First World War began, explained with care.' },
    ],
  },
];

export function tourBySlug(slug: string): Tour | undefined {
  return TOURS.find((tour) => tour.slug === slug);
}
