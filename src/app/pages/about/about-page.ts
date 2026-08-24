import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ORGANIZATION,
  defaultWhatsAppText,
  whatsappUrl,
} from '../../config/organization.config';
import { WhatsappIcon } from '../../components/whatsapp-icon/whatsapp-icon';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, WhatsappIcon],
  templateUrl: './about-page.html',
})
export class AboutPage {
  protected readonly org = ORGANIZATION;
  protected readonly chat = whatsappUrl(defaultWhatsAppText());
}
