import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';

import { CoreService } from './core/services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatSidenav) sideNavInstance: MatSidenav;

  public path = '';
  public isHome = false;
  public showModal = false;
  public modalData = {};

  constructor(
    private changeDetector: ChangeDetectorRef,
    private location: Location,
    private router: Router,
    public service: CoreService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.path = location.path();
        this.isHome = this.path.includes('home');
      }
    });

    service.subject.subscribe(
      () => this.sideNavInstance.toggle()
    );
  }

  public openModal(model: any): void {
    this.showModal = true;

    switch (model.type) {
      case 'error':
        this.modalData = {
          type: model.type,
          title: 'Error',
          message: model.data.message,
          stack: model.data.originalError.stack
        };
        break;
      case 'dropboxSave':
        this.modalData = {
          type: model.type,
          title: 'Save to Dropbox',
          uri: model.data
        };
        break;
    }
  }

  public closeModal(): void {
    this.showModal = false;
    this.modalData = {};
  }

}
