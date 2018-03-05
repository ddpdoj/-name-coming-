import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalAchievementsModule } from './global-achievements/global-achievements.module';
import { PartyAchievementsModule } from './party-achievements/party-achievements.module';
import { GlobalAchievementsComponent } from './global-achievements/global-achievements.component';
import { PartyAchievementsComponent } from './party-achievements/party-achievements.component';

const routes: Routes = [
  {
    path: 'party',
    component: PartyAchievementsComponent
  },
  {
    path: 'global',
    component: GlobalAchievementsComponent
  },
  {
    path: '',
    redirectTo: '/achievements/party',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    GlobalAchievementsModule,
    PartyAchievementsModule
  ]
})
export class AchievementsModule { }
