import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    CharactersComponent
  ]
})
export class CharactersModule { }
