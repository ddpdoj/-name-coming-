import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EnhancementsComponent } from './enhancements.component';

const routes: Routes = [
  {
    path: '',
    component: EnhancementsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    EnhancementsComponent
  ]
})
export class EnhancementsModule { }
