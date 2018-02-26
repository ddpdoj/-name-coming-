import { Component } from '@angular/core';

import { MyCommonService } from './common/services/common.service';
import { ModalBodies } from './common/constants/modal-bodies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showModal = false;
  public modalData = {};

  constructor(public service: MyCommonService) {
    service.setModal.subscribe(
      model => this.openModal(model)
    );
    service.closeModal.subscribe(
      () => this.closeModal()
    );
  }

  public openModal(model: any): void {
    this.showModal = true;

    switch (model.type) {
      case 'error':
        this.modalData = {
          type: model.type,
          title: 'Error',
          message: model.data.message,
          stack: model.data.originalError.stack
        };
        break;
      case 'dropboxSave':
        this.modalData = {
          type: model.type,
          title: 'Save to Dropbox',
          uri: model.data
        };
        break;
    }
  }

  public closeModal(): void {
    this.showModal = false;
    this.modalData = {};
  }

}
