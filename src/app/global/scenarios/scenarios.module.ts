import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScenariosComponent } from './scenarios.component';

const routes: Routes = [
  {
    path: '',
    component: ScenariosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    ScenariosComponent
  ]
})
export class ScenariosModule { }
