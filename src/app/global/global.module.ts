import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScenariosModule } from './scenarios/scenarios.module';
import { ScenariosComponent } from './scenarios/scenarios.component';

const routes: Routes = [
  {
    path: 'scenarios',
    component: ScenariosComponent
  },
  {
    path: '',
    redirectTo: '/global/prosperity',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ScenariosModule
  ]
})
export class GlobalModule { }
