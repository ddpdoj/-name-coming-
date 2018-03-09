import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'party',
    loadChildren: './global-achievements/global-achievements.module#GlobalAchievementsModule'
  },
  {
    path: 'global',
    loadChildren: './party-achievements/party-achievements.module#PartyAchievementsModule'
  },
  {
    path: '',
    redirectTo: 'party'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AchievementsModule { }
