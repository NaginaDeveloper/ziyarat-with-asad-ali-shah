import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ORGANIZATION, enquireMailto } from '../../config/organization.config';
import { TOURS } from '../../data/tours';

@Component({
  selector: 'app-enquire-page',
  imports: [ReactiveFormsModule],
  templateUrl: './enquire-page.html',
})
export class EnquirePage {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);

  protected readonly org = ORGANIZATION;
  protected readonly tours = TOURS;
  protected sent = false;

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    party: [''],
    tour: [this.route.snapshot.queryParamMap.get('tour') ?? ''],
    dates: [''],
    message: ['', [Validators.required, Validators.minLength(12)]],
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    const tourTitle =
      TOURS.find((t) => t.slug === value.tour)?.title ?? (value.tour || 'General enquiry');
    const body = [
      `Name: ${value.name}`,
      `Email: ${value.email}`,
      `Phone: ${value.phone || '—'}`,
      `Travellers: ${value.party || '—'}`,
      `Tour: ${tourTitle}`,
      `Preferred dates: ${value.dates || '—'}`,
      '',
      value.message,
    ].join('\n');
    globalThis.location.href = enquireMailto(`Ziyarat enquiry — ${tourTitle}`, body);
    this.sent = true;
  }
}
