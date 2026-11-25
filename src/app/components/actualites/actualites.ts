import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Article {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-actualites',
  standalone: true,
  imports: [NgFor],
  templateUrl: './actualites.html',
  styleUrl: './actualites.scss',
})
export class Actualites {
  readonly articles: Article[] = [
    {
      category: 'Stratégie',
      title: 'Comment les marques B2B peuvent se réinventer à l’ère digitale ?',
      excerpt: 'Décryptage des leviers stratégiques pour renforcer la visibilité, la crédibilité et l’impact des marques industrielles.',
      date: '12 oct. 2025',
      image: 'assets/images/man-walking-corridor.jpg',
    },
    {
      category: 'Créativité',
      title: 'Le pouvoir des idées dans un monde en transformation',
      excerpt: 'Pourquoi la créativité reste un moteur essentiel pour se différencier et créer des connexions durables.',
      date: '05 oct. 2025',
      image: 'assets/images/portrait-glasses.jpg',
    },
    {
      category: 'Digital',
      title: 'IA et communication : une alliance qui accélère',
      excerpt: 'Usages, opportunités et bonnes pratiques pour intégrer l’intelligence artificielle dans vos dispositifs de communication.',
      date: '28 sept. 2025',
      image: 'assets/images/laptop-performance.jpg',
    },
  ];
}
