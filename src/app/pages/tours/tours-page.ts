import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DESTINATION_FILTERS, DestinationId, TOURS } from '../../data/tours';
import { TripCard } from '../../components/trip-card/trip-card';

@Component({
  selector: 'app-tours-page',
  imports: [TripCard],
  templateUrl: './tours-page.html',
})
export class ToursPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly filters = DESTINATION_FILTERS;
  private readonly dest = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('dest') ?? 'all')),
    { initialValue: this.route.snapshot.queryParamMap.get('dest') ?? 'all' },
  );

  protected readonly selected = signal<'all' | DestinationId>('all');

  constructor() {
    effect(() => {
      const dest = this.dest();
      const match = DESTINATION_FILTERS.find((item) => item.id === dest);
      this.selected.set(match ? match.id : 'all');
    });
  }

  protected readonly tours = computed(() => {
    const filter = this.selected();
    if (filter === 'all') {
      return TOURS;
    }
    return TOURS.filter((tour) => tour.destination === filter);
  });

  protected choose(id: 'all' | DestinationId): void {
    this.selected.set(id);
  }
}
