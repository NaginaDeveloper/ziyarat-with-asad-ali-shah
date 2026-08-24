export type DestinationId = 'iraq' | 'hajj-umrah' | 'al-quds' | 'uzbekistan' | 'bosnia';

export interface TourStop {
  readonly place: string;
  readonly note: string;
}

export interface TourFaq {
  readonly q: string;
  readonly a: string;
}

export interface Tour {
  readonly slug: string;
  readonly title: string;
  readonly region: string;
  readonly duration: string;
  readonly group: string;
  readonly destination: DestinationId;
  readonly filterLabel: string;
  readonly availabilityLabel: string;
  readonly summary: string;
  readonly story: string;
  /** Sacred-place cover for cards (not a portrait). */
  readonly coverImage: string;
  readonly imageVideoId: string;
  readonly includes: readonly string[];
  readonly excludes: readonly string[];
  readonly stops: readonly TourStop[];
  readonly faqs: readonly TourFaq[];
  readonly relatedVideoIds: readonly string[];
}

export const DESTINATION_FILTERS: readonly { id: 'all' | DestinationId; label: string }[] = [
  { id: 'all', label: 'All journeys' },
  { id: 'hajj-umrah', label: 'Hajj & Umrah' },
  { id: 'iraq', label: 'Iraq' },
  { id: 'al-quds', label: 'Al-Quds' },
  { id: 'uzbekistan', label: 'Uzbekistan' },
  { id: 'bosnia', label: 'Bosnia' },
];

const SHARED_EXCLUDES = [
  'Personal spending and optional extras',
  'Visa fees, unless we confirm otherwise for that group',
  'Travel insurance — we ask every traveller to arrange their own',
] as const;

export const TOURS: readonly Tour[] = [
  {
    slug: 'hajj-umrah',
    title: 'Hajj & Umrah',
    region: 'Makkah · Madinah',
    duration: 'Seasonal',
    group: 'UK pilgrims',
    destination: 'hajj-umrah',
    filterLabel: 'Hajj & Umrah',
    availabilityLabel: 'Seasonal — ask for this year',
    summary:
      'Useful, practical guidance for Hajj and Umrah — rites, ziyarat in the Two Holy Mosques, and how to keep the journey sincere.',
    story:
      'Hajj and Umrah are not packaged as a luxury holiday. The emphasis is on correct rites, ziyarat of Madinah, and preparing the heart. Ask for the current season’s dates, flights, and what the group will cover in Makkah and Madinah. Share the details with family — this work is intended as sadaqah jariyah of knowledge, not a sales pitch.',
    coverImage: 'destinations/kaaba.jpg',
    imageVideoId: 'Sae4pB2hsyc',
    includes: [
      'Guidance on Hajj and Umrah rites',
      'Ziyarat of Madinah al-Munawwarah',
      'UK group coordination',
      'Clear, seasonal information before you book',
    ],
    excludes: ['Package hotels and flights until the season is confirmed', ...SHARED_EXCLUDES],
    stops: [
      {
        place: 'Makkah al-Mukarramah',
        note: 'Masjid al-Haram, the rites of Hajj or Umrah, and nearby ziyarat as time allows.',
      },
      {
        place: 'Madinah al-Munawwarah',
        note: 'Masjid an-Nabawi, Jannat al-Baqi, Uhud, and the masajid of Madinah.',
      },
    ],
    faqs: [
      {
        q: 'Is this a luxury Hajj package?',
        a: 'No. The priority is correct rites, ziyarat, and sincerity. Accommodation and flights are confirmed for each season when you enquire — not sold as a five-star brochure.',
      },
      {
        q: 'When should I get in touch?',
        a: 'As early as you can. Hajj and peak Umrah windows fill, and we would rather tell you honestly if a season is already closed.',
      },
    ],
    relatedVideoIds: ['f91Sj9Muf9E', 'Sae4pB2hsyc', 'EW_711erU4o', 'ZN2ntNbma1Q'],
  },
  {
    slug: 'iraq-ziyarat',
    title: 'Iraq Ziyarat',
    region: 'Najaf · Karbala · Baghdad · Madaen',
    duration: '10–14 days',
    group: 'UK travelling group',
    destination: 'iraq',
    filterLabel: 'Iraq',
    availabilityLabel: 'Enquire for the next UK group',
    summary:
      'A guided ziyarat of Iraq’s blessed cities — shrines of the Ahl al-Bayt, the companions, and the awliya — with history explained at each maqam.',
    story:
      'This is the journey many of our travellers remember most. The group visits Baghdad Sharif, Najaf al-Ashraf and Karbala al-Mualla, with time at Kadhimain and Madaen. Syed Asad Ali Shah walks the ziyarat with you: who is buried here, why the site matters, and how to keep adab. Past groups have stood at the shrines of Imam Ali (as), Imam Hussain (as), Salman al-Farsi (ra), Hudhayfah ibn al-Yaman (ra), and Ma‘ruf al-Karkhi (rah).',
    coverImage: 'destinations/najaf.jpg',
    imageVideoId: 'LnquI3S1qp4',
    includes: [
      'Scholar-led ziyarat at each shrine',
      'History of the Ahl al-Bayt, sahaba and awliya',
      'Group travel from the UK',
      'Time for dua, ziyarat, and rest between cities',
    ],
    excludes: ['International flights until confirmed for that departure', ...SHARED_EXCLUDES],
    stops: [
      { place: 'Najaf al-Ashraf', note: 'Shrine of Imam Ali ibn Abi Talib (as) and Wadi as-Salaam.' },
      { place: 'Karbala al-Mualla', note: 'Shrines of Imam Hussain (as) and Hazrat Abbas (as).' },
      {
        place: 'Baghdad Sharif',
        note: 'Kadhimain, and the resting places of Baghdad’s saints including Ma‘ruf al-Karkhi.',
      },
      {
        place: 'Madaen',
        note: 'Salman al-Farsi (ra), Hudhayfah ibn al-Yaman (ra), and the family of Jabir ibn Abd Allah (ra).',
      },
      { place: 'Hillah & Babylon', note: 'Sites linked to Ibrahim (as) and Ayyub (as), when the itinerary allows.' },
    ],
    faqs: [
      {
        q: 'How demanding is the walking?',
        a: 'This is a shrine ziyarat, not a trekking holiday. There is walking between harams and coaches between cities, with rest built into the days. Tell us about mobility needs when you enquire.',
      },
      {
        q: 'When is the next group?',
        a: 'Dates follow the Islamic calendar, visas, and who can travel from the UK. We confirm the next departure by WhatsApp rather than publishing a fixed brochure.',
      },
      {
        q: 'Who leads the ziyarat?',
        a: 'Syed Asad Ali Shah travels with the group and explains the history and adab at each maqam.',
      },
    ],
    relatedVideoIds: [
      'LnquI3S1qp4',
      'OCHNU7MKFwo',
      '0EnHpLjyWUQ',
      'UO2-XIgpxrk',
      'aED5yEdz-vc',
      'tgGQH_Yr5go',
    ],
  },
  {
    slug: 'al-quds',
    title: 'Al-Quds & blessed Palestine',
    region: 'Jerusalem · surrounding maqamat',
    duration: 'By enquiry',
    group: 'Small UK group',
    destination: 'al-quds',
    filterLabel: 'Al-Quds',
    availabilityLabel: 'When travel is responsible',
    summary:
      'Ziyarat of Al-Quds — Masjid al-Aqsa, the Dome of the Rock, and nearby prophetic sites such as the resting place of Dawud (as).',
    story:
      'When travel is possible, this journey is about witnessing the third haram and the prophetic landscape around it. Footage from Jabal Sahyun (Mount Zion) and the maqam associated with Dawud (as) is shared on the channel so those who cannot travel can still see the sites. Enquire for current access, safety, and group dates — we will only run a trip when it is responsible to do so.',
    coverImage: 'destinations/quds.jpg',
    imageVideoId: 'cMUCmKsQZVo',
    includes: [
      'Context of Masjid al-Aqsa and Al-Quds',
      'Prophetic sites around Jerusalem',
      'Small-group, scholar-led visits',
      'Honest advice if travel is not possible that season',
    ],
    excludes: ['Any itinerary that would put the group at unnecessary risk', ...SHARED_EXCLUDES],
    stops: [
      { place: 'Masjid al-Aqsa', note: 'The third haram, insha’Allah, with time for salah and dua.' },
      { place: 'Qubbat as-Sakhrah', note: 'The Dome of the Rock and the noble sanctuary.' },
      { place: 'Jabal Sahyun', note: 'Sites linked to Dawud (as), mentioned sixteen times in the Qur’an.' },
    ],
    faqs: [
      {
        q: 'Are you running this now?',
        a: 'Only when access and safety make it responsible. Message us for an honest answer for the current season. The films remain on the channel for those who cannot travel.',
      },
      {
        q: 'Is it a large group?',
        a: 'When it runs, it is a small UK group — quieter, and easier to keep together at the sanctuary.',
      },
    ],
    relatedVideoIds: ['cMUCmKsQZVo', 'EoO7i7R4M_M', 'Hh7-FuM5iVs', 'airh26iNNG4'],
  },
  {
    slug: 'uzbekistan-awliya',
    title: 'Uzbekistan — cities of the awliya',
    region: 'Bukhara · Tashkent',
    duration: '7–10 days',
    group: 'UK travelling group',
    destination: 'uzbekistan',
    filterLabel: 'Uzbekistan',
    availabilityLabel: 'Enquire for dates',
    summary:
      'Ziyarat of Central Asian saints — Shah Naqshband in Bukhara and the Suhrawardi heritage of Tashkent — with the silsilah explained on site.',
    story:
      'Bukhara and Tashkent hold the graves of imams who shaped the spiritual life of the Ummah. The group visits the shrine of Syed Bahauddin Naqshband Bukhari and related maqamat, including Shaykh Zainuddin Suhrawardi in Tashkent. This is a quieter ziyarat: architecture, silsilah, and time to sit at the graves of those who carried Islam across Transoxiana.',
    coverImage: 'destinations/bukhara.jpg',
    imageVideoId: '59U-7p55fjc',
    includes: [
      'Naqshbandi and Suhrawardi ziyarat',
      'Silsilah and history at each shrine',
      'Bukhara and Tashkent in one journey',
      'UK group flights and local guidance',
    ],
    excludes: ['International flights until confirmed for that departure', ...SHARED_EXCLUDES],
    stops: [
      { place: 'Bukhara', note: 'Shrine of Shah Naqshband, Syed Bahauddin Naqshband Bukhari.' },
      {
        place: 'Tashkent',
        note: 'Shrine of Shaykh Zainuddin Suhrawardi, son of Shaykh Shihabuddin Suhrawardi.',
      },
    ],
    faqs: [
      {
        q: 'Is this a busy city tour?',
        a: 'No. The pace is quieter than Iraq: architecture, silsilah, and time at the graves of the awliya.',
      },
      {
        q: 'Do you explain the spiritual lineage?',
        a: 'Yes. The Naqshbandi and Suhrawardi connections are taught at the shrines, not left as a photo stop.',
      },
    ],
    relatedVideoIds: ['59U-7p55fjc', 'DihAumjBT6A'],
  },
  {
    slug: 'bosnia-heritage',
    title: 'Bosnia — Islam in Europe',
    region: 'Sarajevo and beyond',
    duration: '5–8 days',
    group: 'UK travelling group',
    destination: 'bosnia',
    filterLabel: 'Bosnia',
    availabilityLabel: 'Enquire for dates',
    summary:
      'A heritage ziyarat of Bosnia: how Islam took root in Europe, the mosques of Sarajevo, and the places where history turned.',
    story:
      'Bosnia is where many UK travellers first see a living European Muslim civilisation. The itinerary includes Sarajevo’s historic mosques, the story of those who spread Islam in the Balkans, and sites of modern history including where the First World War began. It is taught as ziyarat and dars, not as dark tourism.',
    coverImage: 'destinations/sarajevo.jpg',
    imageVideoId: 'WD9JFZ2I-f4',
    includes: [
      'Ottoman and Bosnian Islamic heritage',
      'Scholar-led walks in Sarajevo',
      'Context of Islam in Europe',
      'UK group travel',
    ],
    excludes: ['International flights until confirmed for that departure', ...SHARED_EXCLUDES],
    stops: [
      { place: 'Sarajevo', note: 'Historic mosques, the old town, and the figures who spread Islam in Bosnia.' },
      {
        place: 'Twentieth-century sites',
        note: 'Places of memory, including where the First World War began, explained with care.',
      },
    ],
    faqs: [
      {
        q: 'Is this a war-history tour?',
        a: 'No. It is taught as ziyarat and dars: living Islam in Europe, with modern history explained with care rather than spectacle.',
      },
      {
        q: 'How long is the trip?',
        a: 'Usually five to eight days, including Sarajevo and nearby sites. Exact days are confirmed when the group is formed.',
      },
    ],
    relatedVideoIds: ['WD9JFZ2I-f4', 'WfWNAqSQUqw', '3nj-Sbn237Y', 'jWLHxuJPrSM'],
  },

];

export function tourBySlug(slug: string): Tour | undefined {
  return TOURS.find((tour) => tour.slug === slug);
}
