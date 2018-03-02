import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AchievementsComponent } from './achievements.component';

const routes: Routes = [
  {
    path: '',
    component: AchievementsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    AchievementsComponent
  ]
})
export class AchievementsModule { }
