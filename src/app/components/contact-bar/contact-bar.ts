import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ORGANIZATION, defaultWhatsAppText, whatsappUrl } from '../../config/organization.config';
import { WhatsappIcon } from '../whatsapp-icon/whatsapp-icon';

@Component({
  selector: 'app-contact-bar',
  imports: [RouterLink, WhatsappIcon],
  templateUrl: './contact-bar.html',
})
export class ContactBar {
  protected readonly org = ORGANIZATION;
  protected readonly chat = whatsappUrl(defaultWhatsAppText());
}
