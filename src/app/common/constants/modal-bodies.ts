export class ModalBodies {
  public DROPBOX_SAVE =
    '<div class="modal-header">' +
      '<h4 class="modal-title pull-left">Error</h4>' +
      '<button type="button" class="close pull-right" (click)="staticModal.hide()">' +
        '<span>&times;</span>' +
      '</button>' +
    '</div>' +
    '<div class="modal-body">' +
      '<div>' +
        'Your save file is ready to save to Dropbox.' +
      '</div>' +
    '</div>' +
    '<div class="modal-footer">' +
      '<button type="button" class="btn-scoundrel" (click)="service.saveToDropbox()">' +
        '<span class="glyphicon glyphicon-cloud-upload"></span>' +
        'Save to Dropbox' +
      '</button>' +
      '<button type="button" class="btn-lightning" (click)="service.closeDropboxModal">Close</button>' +
    '</div>';

    public ERROR =
      '<div class="modal-header">' +
        '<h4 class="modal-title pull-left">Error</h4>' +
        '<button type="button" class="close pull-right" (click)="staticModal.hide()">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
      '</div>' +
      '<div class="modal-body">' +
        '<div className="error-custom-message">' +
          '{{state.error && state.error.message}}' +
        '</div>' +
        '<div className="error-stack">' +
          '<pre>' +
            '{{state.error && state.error.originalError.stack}}' +
          '</pre>' +
        '</div>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<button class="btn-lightning">Close</button>' +
      '</div>';
}
