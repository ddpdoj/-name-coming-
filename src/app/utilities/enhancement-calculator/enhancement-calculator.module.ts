import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EnhancementCalculatorComponent } from './enhancement-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: EnhancementCalculatorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    EnhancementCalculatorComponent
  ]
})
export class EnhancementCalculatorModule { }
