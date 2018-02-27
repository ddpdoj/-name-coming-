import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

import { MyCommonService } from '../../common/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public GLOBAL_PATHS = ['/scenarios', '/prosperity', '/achievements'];
  public PARTY_PATHS = ['/party', '/characters'];

  constructor(public service: MyCommonService) { }

  ngOnInit() {
    // const win = typeof window === 'object' ? window : {};
    // if (!win.File || !win.FileReader || !win.FileList || !win.Blob) {
    //   console.warn(
    //     '[react-file-reader-input] Some file APIs detected as not supported.' +
    //     ' File reader functionality may not fully work.'
    //   );
    // }
  }

  // public handleChange(e: Event) {
  //   const file = e.target['files'][0];
  //   const readAs = 'text';

  //   const reader = new FileReader();

  //   Observable.create(observer => {
  //     reader.onload = () => {
  //       observer.next(reader.result);
  //       observer.complete();
  //     };
  //   }).subscribe(
  //     result => this.loadGame(result)
  //   );

  //   reader.readAsText(file);
  // }

  // public saveGame() {
  //   this._service.saveGame();
  // }

  // public loadGame(result) {
  //   const fileJSON = JSON.parse(result);
  //   this._service.loadGame(fileJSON);
  // }

  // public loadFromDropbox(): void {

  // }

  // public startSaveToDropbox(): void {
  //   this.service.startSaveToDropbox();
  // }

}
