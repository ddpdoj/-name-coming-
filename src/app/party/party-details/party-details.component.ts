import { Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { CoreService } from '../../core/services/core.service';
import { Character } from '../../core/models/character.model';
import { Game } from '../../core/models/game.model';
import { ICONS } from '../../core/constants/icons';

@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.scss']
})
export class PartyDetailsComponent {

  public displayedColumns = ['class', 'name', 'level'];
  public game: Game;
  public rows: Character[] = [
    { name: 'Guy', class: 'Brute', icon: 'brute', level: 2 },
    { name: 'Buddy', class: 'Spellweaver', icon: 'spellweaver', level: 4 },
    { name: 'Friend', class: 'Mindthief', icon: 'mindthief', level: 5 },
    { name: 'Chap', class: 'Cragheart', icon: 'cragheart', level: 3 }
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public service: CoreService
  ) {
    this.rows.forEach(tile => {
      iconRegistry.addSvgIcon(
        tile.icon,
        sanitizer.bypassSecurityTrustResourceUrl(
          `../../assets/images/icons/classes/${tile.icon}.svg`));
    });

    this.game = JSON.parse(JSON.stringify(this.service.game));
  }

  public rowClicked(row: Character): void {
    console.log('clicked ' + row.name);
  }

}
