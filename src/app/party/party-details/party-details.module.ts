import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { PartyDetailsComponent } from './party-details.component';

const routes: Routes = [
  {
    path: '',
    component: PartyDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    PartyDetailsComponent
  ]
})
export class PartyDetailsModule { }
