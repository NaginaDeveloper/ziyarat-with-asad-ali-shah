import { Component, HostListener, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import {
  ORGANIZATION,
  defaultWhatsAppText,
  whatsappUrl,
} from '../../config/organization.config';
import { WhatsappIcon } from '../whatsapp-icon/whatsapp-icon';

interface NavItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, WhatsappIcon],
  templateUrl: './header.html',
})
export class Header {
  private readonly router = inject(Router);

  protected readonly org = ORGANIZATION;
  protected readonly chat = whatsappUrl(defaultWhatsAppText());
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly isHome = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects.split('?')[0] === '/'),
    ),
    { initialValue: this.router.url.split('?')[0] === '/' || this.router.url === '' },
  );

  protected readonly links: readonly NavItem[] = [
    { label: 'Journeys', path: '/tours' },
    { label: 'Videos', path: '/journeys' },
    { label: 'The guide', path: '/about' },
  ];

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.close());
  }

  protected get transparent(): boolean {
    return Boolean(this.isHome()) && !this.scrolled() && !this.open();
  }

  protected get headerClass(): string {
    const position = this.isHome() ? 'fixed inset-x-0 top-0' : 'sticky top-0';
    const theme = this.transparent
      ? 'border-b border-transparent bg-transparent text-parchment'
      : 'border-b border-stone/80 bg-parchment/92 text-ink backdrop-blur-xl';
    return `${position} z-50 transition-colors duration-300 ${theme}`;
  }

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(globalThis.scrollY > 24);
  }
}
