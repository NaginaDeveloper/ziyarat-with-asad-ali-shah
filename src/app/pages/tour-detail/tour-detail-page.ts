import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { tourBySlug } from '../../data/tours';
import { youtubeThumbUrl } from '../../data/videos';

@Component({
  selector: 'app-tour-detail-page',
  imports: [RouterLink],
  templateUrl: './tour-detail-page.html',
})
export class TourDetailPage {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly tour = computed(() => tourBySlug(this.slug()));
  protected readonly thumb = youtubeThumbUrl;
}
