import { Component, ViewChild, OnInit } from '@angular/core';

import { CoreService } from '../../core/services/core.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private service: CoreService) { }

  ngOnInit() {
  }

}
