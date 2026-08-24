import { Component, computed, signal } from '@angular/core';
import { VideoLightbox } from '../../components/video-lightbox/video-lightbox';
import { ORGANIZATION } from '../../config/organization.config';
import { JOURNEY_VIDEOS, youtubeThumbUrl } from '../../data/videos';

@Component({
  selector: 'app-journeys-page',
  imports: [VideoLightbox],
  templateUrl: './journeys-page.html',
})
export class JourneysPage {
  protected readonly org = ORGANIZATION;
  protected readonly thumb = youtubeThumbUrl;
  protected readonly playing = signal<string | null>(null);
  protected readonly query = signal('');
  protected readonly totalCount = JOURNEY_VIDEOS.length;

  protected readonly videos = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) {
      return JOURNEY_VIDEOS;
    }
    return JOURNEY_VIDEOS.filter(
      (video) => video.title.toLowerCase().includes(q) || video.place.toLowerCase().includes(q),
    );
  });

  protected onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.query.set(value);
  }

  protected clearSearch(): void {
    this.query.set('');
  }
}
