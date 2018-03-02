import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule } from '@angular/material';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
