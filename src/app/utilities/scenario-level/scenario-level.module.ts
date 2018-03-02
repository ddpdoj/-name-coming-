import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScenarioLevelComponent } from './scenario-level.component';

const routes: Routes = [
  {
    path: '',
    component: ScenarioLevelComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    ScenarioLevelComponent
  ]
})
export class ScenarioLevelModule { }
