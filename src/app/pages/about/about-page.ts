import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ORGANIZATION } from '../../config/organization.config';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink],
  templateUrl: './about-page.html',
})
export class AboutPage {
  protected readonly org = ORGANIZATION;
}
