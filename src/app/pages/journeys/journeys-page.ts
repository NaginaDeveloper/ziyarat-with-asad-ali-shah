import { Component } from '@angular/core';
import { ORGANIZATION } from '../../config/organization.config';
import { JOURNEY_VIDEOS, youtubeThumbUrl, youtubeWatchUrl } from '../../data/videos';

@Component({
  selector: 'app-journeys-page',
  imports: [],
  templateUrl: './journeys-page.html',
})
export class JourneysPage {
  protected readonly org = ORGANIZATION;
  protected readonly films = JOURNEY_VIDEOS;
  protected readonly thumb = youtubeThumbUrl;
  protected readonly watch = youtubeWatchUrl;
}
