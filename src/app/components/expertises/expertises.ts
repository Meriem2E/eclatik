import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Expertise {
  icon: 'target' | 'bulb' | 'monitor' | 'megaphone';
  title: string;
  items: string[];
}

@Component({
  selector: 'app-expertises',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './expertises.html',
  styleUrl: './expertises.scss',
})
export class Expertises {
  readonly expertises: Expertise[] = [
    {
      icon: 'target',
      title: 'Stratégie & Performance',
      items: ['Audit & conseil', 'Études & insights', 'Stratégie de marque', 'KPI & pilotage'],
    },
    {
      icon: 'bulb',
      title: 'Branding & Identité',
      items: ['Positionnement', 'Plateforme de marque', 'Storytelling', 'Direction artistique'],
    },
    {
      icon: 'monitor',
      title: 'Développement web & applications',
      items: ['Sites web performants', 'UX/UI design', 'Solutions digitales', 'Conversion & data'],
    },
    {
      icon: 'megaphone',
      title: 'Activation & Engagement',
      items: ['SEO & SEA', 'Social media', 'Content marketing', 'Événements & RP'],
    },
  ];
}
