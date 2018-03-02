import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PartyComponent } from './party.component';

const routes: Routes = [
  {
    path: '',
    component: PartyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PartyComponent
  ]
})
export class PartyModule { }
