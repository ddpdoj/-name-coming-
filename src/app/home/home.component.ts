import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { CoreService } from '../core/services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // @HostBinding('class.accent-light') accentClass = true;

  public tiles = [
    { id: 'party', icon: 'party' },
    { id: 'achievements', icon: 'achievement' },
    { id: 'scenarios', icon: 'map' },
    { id: 'calculator', icon: 'calculator' },
    { id: 'monsters', icon: 'monster' },
    { id: 'los-ai', icon: 'los-ai' }
  ];

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
