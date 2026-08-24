export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly context: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'I was fortunate to be with the group in October 2023. We visited Iraq and the three blessed places of Baghdad Sharif, Najaf…',
    name: 'Najabat Mahmood',
    context: 'Traveller · Iraq ziyarat',
  },
];
