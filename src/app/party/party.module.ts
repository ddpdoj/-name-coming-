import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartyDetailsModule } from './party-details/party-details.module';
import { CharactersModule } from './characters/characters.module';
import { ProsperityModule } from './prosperity/prosperity.module';
import { PartyDetailsComponent } from './party-details/party-details.component';
import { CharactersComponent } from './characters/characters.component';
import { ProsperityComponent } from './prosperity/prosperity.component';

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
    redirectTo: '/party/details',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    PartyDetailsModule,
    CharactersModule,
    ProsperityModule
  ]
})
export class PartyModule { }
