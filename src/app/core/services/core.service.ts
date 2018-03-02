import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CoreService {

  public subject = new Subject();

  constructor() { }

  public toggleSidenav(): void {
    this.subject.next();
  }

}
