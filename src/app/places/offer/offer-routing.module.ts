import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferPage } from './offer.page';

const routes: Routes = [
  {
    path: '',
    component: OfferPage
  },
  {
    path: 'edit/:placeId',
    loadChildren: () => import('./edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferPageRoutingModule {}
