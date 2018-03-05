import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnhancementsModule } from './enhancements/enhancements.module';
import { ScenarioLevelModule } from './scenario-level/scenario-level.module';
import { EnhancementsComponent } from './enhancements/enhancements.component';
import { ScenarioLevelComponent } from './scenario-level/scenario-level.component';

const routes: Routes = [
  {
    path: 'enhancements',
    component: EnhancementsComponent
  },
  {
    path: 'scenario-level',
    component: ScenarioLevelComponent
  },
  {
    path: '',
    redirectTo: '/calculators/enhancement',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    EnhancementsModule,
    ScenarioLevelModule
  ]
})
export class CalculatorsModule { }
