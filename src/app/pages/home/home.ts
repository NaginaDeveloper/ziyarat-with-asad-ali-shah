import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ORGANIZATION } from '../../config/organization.config';
import { TOURS } from '../../data/tours';
import { JOURNEY_VIDEOS, youtubeThumbUrl, youtubeWatchUrl } from '../../data/videos';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  protected readonly org = ORGANIZATION;
  protected readonly tours = TOURS;
  protected readonly films = JOURNEY_VIDEOS.slice(0, 6);
  protected readonly thumb = youtubeThumbUrl;
  protected readonly watch = youtubeWatchUrl;
}
