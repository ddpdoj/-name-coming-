import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'details',
    loadChildren: './party-details/party-details.module#PartyDetailsModule'
  },
  {
    path: 'prosperity',
    loadChildren: './prosperity/prosperity.module#ProsperityModule'
  },
  {
    path: '',
    redirectTo: 'details'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PartyModule { }
