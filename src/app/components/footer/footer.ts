import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ORGANIZATION,
  defaultWhatsAppText,
  whatsappUrl,
} from '../../config/organization.config';
import { TOURS } from '../../data/tours';
import { WhatsappIcon } from '../whatsapp-icon/whatsapp-icon';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, WhatsappIcon],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly org = ORGANIZATION;
  protected readonly year = new Date().getFullYear();
  protected readonly tours = TOURS;
  protected readonly chat = whatsappUrl(defaultWhatsAppText());
}
