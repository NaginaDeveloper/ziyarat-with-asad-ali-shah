import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItineraryTimeline } from '../../components/itinerary-timeline/itinerary-timeline';
import { VideoLightbox } from '../../components/video-lightbox/video-lightbox';
import { WhatsappIcon } from '../../components/whatsapp-icon/whatsapp-icon';
import { ORGANIZATION, tourWhatsAppUrl } from '../../config/organization.config';
import { tourBySlug } from '../../data/tours';
import { videosByIds, youtubeThumbUrl } from '../../data/videos';

@Component({
  selector: 'app-tour-detail-page',
  imports: [RouterLink, ItineraryTimeline, VideoLightbox, WhatsappIcon],
  templateUrl: './tour-detail-page.html',
})
export class TourDetailPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly org = ORGANIZATION;
  protected readonly playing = signal<string | null>(null);
  protected readonly thumb = youtubeThumbUrl;

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly tour = computed(() => tourBySlug(this.slug()));
  protected readonly films = computed(() => videosByIds(this.tour()?.relatedVideoIds ?? []));
  protected readonly chat = computed(() => {
    const title = this.tour()?.title;
    return title ? tourWhatsAppUrl(title) : tourWhatsAppUrl('a ziyarat journey');
  });
}
