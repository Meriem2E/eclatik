import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss',
})
export class Newsletter {
  email = '';
  submitted = signal(false);

  onSubmit() {
    if (!this.email) return;
    // Intégration réelle (API/CRM) à brancher ici.
    this.submitted.set(true);
    this.email = '';
  }
}
