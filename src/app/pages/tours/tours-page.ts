import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TOURS } from '../../data/tours';
import { youtubeThumbUrl } from '../../data/videos';

@Component({
  selector: 'app-tours-page',
  imports: [RouterLink],
  templateUrl: './tours-page.html',
})
export class ToursPage {
  protected readonly tours = TOURS;
  protected readonly thumb = youtubeThumbUrl;
}
