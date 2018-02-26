import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap';

import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class AppModalModule { }
