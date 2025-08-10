import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'trendify', pathMatch: 'full' },

  {
    path: 'trendify',
    loadComponent: () => import('./trendify/trendify').then((m) => m.Trendify),
    title: 'Trendify',
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
    title: 'About',
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products').then((m) => m.Products),
    title: 'Products',
  },
  {
    path: 'services',
    loadComponent: () => import('./sefvice/sefvice').then((m) => m.Sefvice),
    title: 'Services',
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
    title: 'Contact',
  },
  {
    path: 'recommendation',
    loadComponent: () =>
      import('./recommendation/recommendation').then((m) => m.Recommendation),
    title: 'Recommendation',
  },
  {
    path: '**',
    loadComponent: () => import('./notfound/notfound').then((m) => m.Notfound),
    title: 'Error',
  },
];
