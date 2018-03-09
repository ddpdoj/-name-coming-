import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PartyAchievementsComponent } from './party-achievements.component';

const routes: Routes = [
  {
    path: '',
    component: PartyAchievementsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    PartyAchievementsComponent
  ]
})
export class PartyAchievementsModule { }
