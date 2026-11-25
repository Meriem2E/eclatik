import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [NgFor],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  readonly logos = [
    'Industrie du Maroc', 'CaixaBank', 'Visa', 'OCP', 'Teal',
    'Medium', 'Rayonnage Maroc', 'Hilton', 'Novocare', 'Hadri Groupe',
  ];

  readonly testimonials: Testimonial[] = [
    {
      quote: "Une équipe à l'écoute, créative et ultra professionnelle. Éclatik a su comprendre nos enjeux et les transformer en résultats concrets.",
      name: 'Karim El Aoufi',
      role: 'Directeur Marketing',
      company: 'OCP',
    },
    {
      quote: 'Un partenaire stratégique qui allie créativité, rigueur et performance. Une collaboration qui fait vraiment la différence.',
      name: 'Nadia Benchakroun',
      role: 'Head of Communication',
      company: 'CaixaBank Maroc',
    },
    {
      quote: "Des idées fortes, une exécution impeccable et un véritable sens du résultat. Nous recommandons Éclatik sans hésitation.",
      name: 'Yassine El Harti',
      role: 'CEO',
      company: 'Teal',
    },
  ];

  initials(name: string): string {
    return name.split(' ').map((n) => n[0]).join('');
  }
}
