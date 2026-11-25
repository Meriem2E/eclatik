import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Vision } from './components/vision/vision';
import { Expertises } from './components/expertises/expertises';
import { Realisations } from './components/realisations/realisations';
import { Clients } from './components/clients/clients';
import { Actualites } from './components/actualites/actualites';
import { Newsletter } from './components/newsletter/newsletter';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Vision, Expertises, Realisations, Clients, Actualites, Newsletter, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
