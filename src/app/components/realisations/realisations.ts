import { Component, signal } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

interface Project {
  category: string;
  filter: string;
  title: string;
  desc: string;
  image: string;
  dark?: boolean;
}

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './realisations.html',
  styleUrl: './realisations.scss',
})
export class Realisations {
  readonly filters = ['Tous', 'Industrie', 'Finance', 'Emploi', 'Événement'];
  activeFilter = signal('Tous');

  readonly stats = [
    { value: '+150', label: 'projets réalisés' },
    { value: '+80', label: 'marques accompagnées' },
    { value: '+6', label: "années d'expertise" },
    { value: '100%', label: 'orientés performance' },
  ];

  readonly projects: Project[] = [
    {
      category: 'Industrie',
      filter: 'Industrie',
      title: 'Industrie du Maroc',
      desc: 'Stratégie digitale & contenu',
      image: 'assets/images/man-walking-corridor.jpg',
      dark: true,
    },
    {
      category: 'Finance',
      filter: 'Finance',
      title: 'ThanX by CaixaBank',
      desc: 'Lancement de plateforme',
      image: 'assets/images/champagne-splash.jpg',
      dark: true,
    },
    {
      category: 'Emploi',
      filter: 'Emploi',
      title: 'IndustryJobs',
      desc: 'Branding & plateforme',
      image: 'assets/images/social-icons-phone.jpg',
      dark: true,
    },
    {
      category: 'Événement',
      filter: 'Événement',
      title: 'Industry Meeting Days',
      desc: 'Stratégie & activation',
      image: 'assets/images/camera-studio-yellow.jpg',
      dark: true,
    },
  ];

  visibleProjects() {
    const f = this.activeFilter();
    return f === 'Tous' ? this.projects : this.projects.filter((p) => p.filter === f);
  }

  setFilter(f: string) {
    this.activeFilter.set(f);
  }
}
