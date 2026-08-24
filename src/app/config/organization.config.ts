/** Public details for Ziyarat with Asad Ali Shah. */
export const ORGANIZATION = {
  name: 'Ziyarat with Asad Ali Shah',
  shortName: 'ZWAAS',
  hostName: 'Syed Asad Ali Shah',
  tagline: 'Scholar-led ziyarat and sacred travel from the UK',
  description:
    'Syed Asad Ali Shah, a UK Islamic scholar and TV host, leads ziyarat journeys to sacred sites and shares their history, culture, and adab with travelling groups.',
  email: 'syedretreats@gmail.com',
  phoneDisplay: '07737 285165',
  phoneE164: '+447737285165',
  whatsappNumber: '447737285165',
  telUrl: 'tel:+447737285165',
  streetAddress: '90 Birchtree Avenue',
  addressLocality: 'Peterborough',
  postalCode: 'PE1 4HW',
  addressCountry: 'GB',
  addressCountryName: 'United Kingdom',
  addressFull: '90 Birchtree Avenue, Peterborough PE1 4HW, United Kingdom',
  mapsQuery: '90 Birchtree Avenue, Peterborough PE1 4HW',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=90%20Birchtree%20Avenue%20Peterborough%20PE1%204HW&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=90%20Birchtree%20Avenue%2C%20Peterborough%20PE1%204HW',
  facebookUrl: 'https://www.facebook.com/ZiyaratwithSyedAsad/',
  instagramUrl: 'https://www.instagram.com/ziyaratwithasadalishah/',
  tiktokUrl: 'https://www.tiktok.com/@ziyaratwithasad',
  youtubeUrl: 'https://www.youtube.com/@ZiyaratwithAsad',
  youtubeChannelId: 'UCxW3tyq1qrb1lFqX8zhlmJg',
  bioLinkUrl: 'https://zwaas.bio.link/',
  yearFoundedHint: 2023,
} as const;

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${ORGANIZATION.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function defaultWhatsAppText(): string {
  return `Assalamu alaikum, I would like to enquire about a ziyarat journey with ${ORGANIZATION.name}.`;
}

export interface EnquiryFields {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly party: string;
  readonly tourTitle: string;
  readonly dates: string;
  readonly message: string;
}

export function formatEnquiry(fields: EnquiryFields): string {
  return [
    `Assalamu alaikum,`,
    ``,
    `I would like to enquire about a ziyarat journey.`,
    ``,
    `Name: ${fields.name}`,
    `Email: ${fields.email || '—'}`,
    `Phone: ${fields.phone || '—'}`,
    `Travellers: ${fields.party || '—'}`,
    `Tour: ${fields.tourTitle}`,
    `Preferred dates: ${fields.dates || '—'}`,
    ``,
    fields.message,
  ].join('\n');
}

export function enquireMailto(subject: string, body: string): string {
  return `mailto:${ORGANIZATION.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function enquireWhatsAppUrl(fields: EnquiryFields): string {
  return whatsappUrl(formatEnquiry(fields));
}

export function tourWhatsAppUrl(tourTitle: string): string {
  return whatsappUrl(
    `Assalamu alaikum, I would like to enquire about ${tourTitle} with ${ORGANIZATION.name}.`,
  );
}
