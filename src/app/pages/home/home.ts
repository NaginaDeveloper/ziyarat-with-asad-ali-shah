import { Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { interval } from 'rxjs';
import {
  ORGANIZATION,
  defaultWhatsAppText,
  whatsappUrl,
} from '../../config/organization.config';
import { DESTINATION_FILTERS, TOURS } from '../../data/tours';
import { TESTIMONIALS } from '../../data/testimonials';
import { HERO_SLIDES } from '../../data/hero-slides';
import { JOURNEY_VIDEOS, youtubeThumbUrl } from '../../data/videos';
import { TripCard } from '../../components/trip-card/trip-card';
import { VideoLightbox } from '../../components/video-lightbox/video-lightbox';
import { WhatsappIcon } from '../../components/whatsapp-icon/whatsapp-icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TripCard, VideoLightbox, WhatsappIcon],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly org = ORGANIZATION;
  protected readonly featured = TOURS[0];
  protected readonly rest = TOURS.slice(1);
  protected readonly chips = DESTINATION_FILTERS.filter((item) => item.id !== 'all');
  protected readonly videos = JOURNEY_VIDEOS.slice(0, 6);
  protected readonly quotes = TESTIMONIALS;
  protected readonly thumb = youtubeThumbUrl;
  protected readonly chat = whatsappUrl(defaultWhatsAppText());
  protected readonly playing = signal<string | null>(null);

  protected readonly slides = HERO_SLIDES;
  protected readonly slideIndex = signal(0);
  protected readonly paused = signal(false);

  protected readonly activeSlide = computed(() => this.slides[this.slideIndex()]);

  protected readonly reasons = [
    {
      title: 'A scholar on the ground',
      body: 'Syed Asad Ali Shah walks the ziyarat with you — names, history, and adab at each maqam, not a rushed photo stop.',
    },
    {
      title: 'UK groups, honest dates',
      body: 'Journeys leave from the UK when a group is ready. We confirm flights, visas and days by WhatsApp — no invented brochure prices.',
    },
    {
      title: 'Videos for those at home',
      body: 'The same shrines are recorded so family who cannot travel can still walk the path in knowledge.',
    },
  ] as const;

  ngOnInit(): void {
    interval(6000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (!this.paused()) {
          this.slideIndex.update((i) => (i + 1) % this.slides.length);
        }
      });
  }

  protected goToSlide(index: number): void {
    this.slideIndex.set(index);
  }

  protected pauseHero(): void {
    this.paused.set(true);
  }

  protected resumeHero(): void {
    this.paused.set(false);
  }
}
