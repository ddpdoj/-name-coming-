import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatGridListModule, MatChipsModule, MatExpansionModule } from '@angular/material';

import { GlobalAchievementsComponent } from './global-achievements.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalAchievementsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatExpansionModule
  ],
  declarations: [
    GlobalAchievementsComponent
  ]
})
export class GlobalAchievementsModule { }
