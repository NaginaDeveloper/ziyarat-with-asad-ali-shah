import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  ORGANIZATION,
  enquireMailto,
  enquireWhatsAppUrl,
  formatEnquiry,
} from '../../config/organization.config';
import { TOURS } from '../../data/tours';
import { WhatsappIcon } from '../../components/whatsapp-icon/whatsapp-icon';

@Component({
  selector: 'app-enquire-page',
  imports: [ReactiveFormsModule, WhatsappIcon],
  templateUrl: './enquire-page.html',
})
export class EnquirePage {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);

  protected readonly org = ORGANIZATION;
  protected readonly tours = TOURS;
  protected sent: 'whatsapp' | 'email' | null = null;

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: [''],
    phone: [''],
    party: [''],
    tour: [this.route.snapshot.queryParamMap.get('tour') ?? ''],
    dates: [''],
    message: [''],
  });

  private fields() {
    const value = this.form.getRawValue();
    const tourTitle =
      TOURS.find((tour) => tour.slug === value.tour)?.title ?? (value.tour || 'General enquiry');
    return {
      name: value.name,
      email: value.email,
      phone: value.phone,
      party: value.party,
      tourTitle,
      dates: value.dates,
      message: value.message || 'Please send dates and what the group will cover.',
    };
  }

  protected sendWhatsApp(): void {
    if (this.form.controls.name.invalid) {
      this.form.controls.name.markAsTouched();
      return;
    }
    globalThis.open(enquireWhatsAppUrl(this.fields()), '_blank', 'noopener,noreferrer');
    this.sent = 'whatsapp';
  }

  protected sendEmail(): void {
    const email = this.form.controls.email;
    email.setValidators([Validators.required, Validators.email]);
    email.updateValueAndValidity();
    if (this.form.controls.name.invalid || email.invalid) {
      this.form.controls.name.markAsTouched();
      email.markAsTouched();
      return;
    }
    const fields = this.fields();
    globalThis.location.href = enquireMailto(`Ziyarat enquiry — ${fields.tourTitle}`, formatEnquiry(fields));
    this.sent = 'email';
  }
}
