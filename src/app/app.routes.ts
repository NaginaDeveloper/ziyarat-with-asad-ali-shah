import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Ziyarat with Asad Ali Shah | Guided Islamic travel from the UK',
  },
  {
    path: 'tours',
    loadComponent: () => import('./pages/tours/tours-page').then((m) => m.ToursPage),
    title: 'Tours | Ziyarat with Asad Ali Shah',
  },
  {
    path: 'tours/:slug',
    loadComponent: () =>
      import('./pages/tour-detail/tour-detail-page').then((m) => m.TourDetailPage),
    title: 'Tour | Ziyarat with Asad Ali Shah',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page').then((m) => m.AboutPage),
    title: 'About Syed Asad Ali Shah',
  },
  {
    path: 'journeys',
    loadComponent: () => import('./pages/journeys/journeys-page').then((m) => m.JourneysPage),
    title: 'Journeys on film | Ziyarat with Asad Ali Shah',
  },
  {
    path: 'enquire',
    loadComponent: () => import('./pages/enquire/enquire-page').then((m) => m.EnquirePage),
    title: 'Enquire | Ziyarat with Asad Ali Shah',
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy-page').then((m) => m.PrivacyPage),
    title: 'Privacy | Ziyarat with Asad Ali Shah',
  },
  { path: '**', redirectTo: '' },
];
