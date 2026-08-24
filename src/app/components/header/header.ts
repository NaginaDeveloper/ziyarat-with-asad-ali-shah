import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ORGANIZATION } from '../../config/organization.config';

interface NavItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header {
  protected readonly org = ORGANIZATION;
  protected readonly open = signal(false);

  protected readonly links: readonly NavItem[] = [
    { label: 'Tours', path: '/tours' },
    { label: 'Journeys', path: '/journeys' },
    { label: 'About', path: '/about' },
    { label: 'Enquire', path: '/enquire' },
  ];

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }
}
