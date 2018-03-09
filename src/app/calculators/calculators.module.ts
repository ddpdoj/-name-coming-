import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'enhancements',
    loadChildren: './enhancements/enhancements.module#EnhancementsModule'
  },
  {
    path: 'scenario-level',
    loadChildren: './scenario-level/scenario-level.module#ScenarioLevelModule'
  },
  {
    path: '',
    redirectTo: 'enhancements'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CalculatorsModule { }
