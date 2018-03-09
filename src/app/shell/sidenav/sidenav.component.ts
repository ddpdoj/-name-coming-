import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { CoreService } from '../../core/services/core.service';
import { NavLink, NAV_LINKS } from '../../core/models/nav-link.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  public navLinks: NavLink[] = NAV_LINKS;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public service: CoreService
  ) {
    this.navLinks.forEach(item => {
      iconRegistry.addSvgIcon(
        item.icon,
        sanitizer.bypassSecurityTrustResourceUrl(
          `../../../assets/images/icons/ui/${item.icon}.svg`));
    });
  }

}
