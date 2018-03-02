import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule, MatCardModule, MatIconModule } from '@angular/material';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
