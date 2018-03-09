import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GlobalAchievementsComponent } from './global-achievements.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalAchievementsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    GlobalAchievementsComponent
  ]
})
export class GlobalAchievementsModule { }
