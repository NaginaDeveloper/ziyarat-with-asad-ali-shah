/** Public details for Ziyarat with Asad Ali Shah. */
export const ORGANIZATION = {
  name: 'Ziyarat with Asad Ali Shah',
  shortName: 'ZWAAS',
  hostName: 'Syed Asad Ali Shah',
  tagline: 'Guided ziyarat, sacred history, and spiritual travel from the UK',
  description:
    'Syed Asad Ali Shah, a UK Islamic scholar and TV host, leads ziyarat journeys to sacred sites and shares their history, culture, and adab with travelling groups.',
  email: 'syedretreats@gmail.com',
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

export function enquireMailto(subject: string, body: string): string {
  return `mailto:${ORGANIZATION.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
