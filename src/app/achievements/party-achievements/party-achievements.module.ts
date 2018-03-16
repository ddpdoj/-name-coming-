import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatGridListModule, MatChipsModule, MatExpansionModule } from '@angular/material';

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
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatExpansionModule
  ],
  declarations: [
    PartyAchievementsComponent
  ]
})
export class PartyAchievementsModule { }
