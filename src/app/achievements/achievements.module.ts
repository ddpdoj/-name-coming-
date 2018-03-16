import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'party',
    loadChildren: './party-achievements/party-achievements.module#PartyAchievementsModule'
  },
  {
    path: 'global',
    loadChildren: './global-achievements/global-achievements.module#GlobalAchievementsModule'
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
