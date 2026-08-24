import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactBar } from './components/contact-bar/contact-bar';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer, ContactBar],
  templateUrl: './app.html',
})
export class App {}
