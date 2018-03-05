import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProsperityComponent } from './prosperity.component';

const routes: Routes = [
  {
    path: '',
    component: ProsperityComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    ProsperityComponent
  ]
})
export class ProsperityModule { }
