import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    title: 'Inicio'
  },
  {
    path: 'publications',
    title: 'Publicaciones'
  },
  {
    path: 'settings',
    title: 'Personalizar'
  },
];
