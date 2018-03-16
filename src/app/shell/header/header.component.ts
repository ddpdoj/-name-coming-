import { Component, Input } from '@angular/core';

import { CoreService } from '../../core/services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isHome = true;

  constructor(public service: CoreService) { }

  public toggleSidenav(): void {
    this.service.toggleSidenav();
  }

}
