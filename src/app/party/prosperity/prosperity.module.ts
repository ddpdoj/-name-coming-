import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule
} from '@angular/material';

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
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  declarations: [
    ProsperityComponent
  ]
})
export class ProsperityModule { }
