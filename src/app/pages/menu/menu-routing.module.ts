import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stream',
    pathMatch: 'full'
  },
  {
    path: 'stream',
    loadChildren: () => import('../stream/stream.module').then(m => m.StreamPageModule),
    component: MenuPage,
  },
  {
    path: 'contacto',
    component: MenuPage,
    loadChildren: () => import('../contacto/contacto.module').then(m => m.ContactoPageModule)
  },
  {
    path: 'noticias',
    component: MenuPage,
    loadChildren: () => import('../noticias/noticias.module').then(m => m.NoticiasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
