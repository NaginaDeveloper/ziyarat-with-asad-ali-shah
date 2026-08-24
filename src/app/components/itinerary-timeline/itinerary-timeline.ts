import { Component, input } from '@angular/core';
import { TourStop } from '../../data/tours';

@Component({
  selector: 'app-itinerary-timeline',
  templateUrl: './itinerary-timeline.html',
})
export class ItineraryTimeline {
  readonly stops = input.required<readonly TourStop[]>();
}
