import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
  exports: [
    HeaderModule,
    SidenavModule
  ]
})
export class ShellModule { }
