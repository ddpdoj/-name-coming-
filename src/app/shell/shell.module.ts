import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { AppModalModule } from './modal/modal.module';

@NgModule({
  exports: [
    HeaderModule,
    FooterModule,
    AppModalModule
  ]
})
export class ShellModule { }
