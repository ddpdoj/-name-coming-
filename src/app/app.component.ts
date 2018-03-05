import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabNav, MatTabLink } from '@angular/material/tabs';
import { MatCard } from '@angular/material/card';

import { CoreService } from './core/services/core.service';
import { TAB_LINKS, TabLink } from './core/constants/tab-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatSidenav) sideNavInstance: MatSidenav;

  public path = '';
  public navLinks: TabLink[] = [];
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

        if (this.path.includes('achievements'))
          this.navLinks = TAB_LINKS.ACHIEVEMENTS;
        else if (this.path.includes('calculators'))
          this.navLinks = TAB_LINKS.CALCULATORS;
        else if (this.path.includes('party'))
          this.navLinks = TAB_LINKS.PARTY;
        else if (this.path.includes('map-calculators'))
          this.navLinks = TAB_LINKS.MAP_CALCULATORS;
        else
          this.navLinks = new Array<TabLink>();
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
