import { Component, OnInit } from '@angular/core';

import { CoreService } from '../../core/services/core.service';
import { Character } from '../../core/models/character.model';
import { IMAGES } from '../../core/constants/images';

@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.scss']
})
export class PartyDetailsComponent implements OnInit {

  public displayedColumns = ['class', 'name', 'level'];
  public rows: Character[] = [
    { name: 'Guy', class: 'Brute', classImg: IMAGES['Brute'], level: 2 },
    { name: 'Buddy', class: 'Spellweaver', classImg: IMAGES['Spellweaver'], level: 4 },
    { name: 'Friend', class: 'Mindthief', classImg: IMAGES['Mindthief'], level: 5 },
    { name: 'Chap', class: 'Cragheart', classImg: IMAGES['Cragheart'], level: 3 }
  ];

  constructor(public service: CoreService) { }

  ngOnInit() {

  }

}
