import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tour } from '../../data/tours';

@Component({
  selector: 'app-trip-card',
  imports: [RouterLink],
  templateUrl: './trip-card.html',
})
export class TripCard {
  readonly tour = input.required<Tour>();
  readonly featured = input(false);
}
