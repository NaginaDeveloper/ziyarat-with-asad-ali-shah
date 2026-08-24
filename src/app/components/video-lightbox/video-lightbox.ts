import { Component, HostListener, computed, inject, input, output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { youtubeEmbedUrl } from '../../data/videos';

@Component({
  selector: 'app-video-lightbox',
  templateUrl: './video-lightbox.html',
})
export class VideoLightbox {
  private readonly sanitizer = inject(DomSanitizer);

  readonly videoId = input<string | null>(null);
  readonly closed = output<void>();

  protected readonly embed = computed(() => {
    const id = this.videoId();
    if (!id) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${youtubeEmbedUrl(id)}?autoplay=1&rel=0`);
  });

  protected close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.videoId()) {
      this.close();
    }
  }
}
