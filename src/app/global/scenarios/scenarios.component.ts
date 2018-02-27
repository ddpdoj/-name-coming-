import { Component, OnInit } from '@angular/core';

import { SCENARIOS } from '../../common/constants/scenerios';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss']
})
export class ScenariosComponent implements OnInit {

  public scenarios = SCENARIOS;

  constructor() { }

  ngOnInit() {
  }

}
