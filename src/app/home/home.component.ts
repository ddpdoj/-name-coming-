import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { CoreService } from '../core/services/core.service';
import { NavLink, NAV_LINKS } from '../core/models/nav-link.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public tiles: NavLink[] = NAV_LINKS;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public service: CoreService
  ) {
    this.tiles.forEach(tile => {
      iconRegistry.addSvgIcon(
        tile.icon,
        sanitizer.bypassSecurityTrustResourceUrl(
          `../../assets/images/icons/ui/${tile.icon}.svg`));
    });
  }

}
