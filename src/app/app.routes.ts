
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.page').then((m) => m.HomePage),
    title: 'Gardino e Armeligi — Cantina di famiglia'
  },
  {
    path: 'storia',
    loadComponent: () => import('./pages/storia.page').then((m) => m.StoriaPage),
    title: 'La storia — Gardino e Armeligi'
  },
  {
    path: 'vini',
    loadComponent: () => import('./pages/vini.page').then((m) => m.ViniPage),
    title: 'I vini — Gardino e Armeligi'
  },
  {
    path: 'distribuzione',
    loadComponent: () => import('./pages/distribuzione.page').then((m) => m.DistribuzionePage),
    title: 'Distribuzione — Gardino e Armeligi'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti.page').then((m) => m.ContattiPage),
    title: 'Contatti — Gardino e Armeligi'
  },
  { path: '**', redirectTo: '' }
];
