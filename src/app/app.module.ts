import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ShellModule } from './shell/shell.module';
import { MyCommonService } from './common/services/common.service';
import { CoreService } from './core/services/core.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    ShellModule
  ],
  providers: [
    MyCommonService,
    CoreService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
