import { Component } from '@angular/core';
import { ORGANIZATION } from '../../config/organization.config';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.html',
})
export class PrivacyPage {
  protected readonly org = ORGANIZATION;
}
