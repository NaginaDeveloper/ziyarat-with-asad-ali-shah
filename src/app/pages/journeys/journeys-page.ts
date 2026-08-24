import { Component, signal } from '@angular/core';
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
  protected readonly films = JOURNEY_VIDEOS;
  protected readonly thumb = youtubeThumbUrl;
  protected readonly playing = signal<string | null>(null);
}
