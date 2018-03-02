import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { MyCommonService } from '../../common/services/common.service';
import { PARTY_ACHIEVEMENTS } from '../../common/constants/party-achievements';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  public partyForm: FormGroup;
  public name: FormControl =  new FormControl();
  public location: FormControl = new FormControl();
  public notes: FormControl = new FormControl();
  public achievements = Object.values(PARTY_ACHIEVEMENTS);

  constructor(public service: MyCommonService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  private createFormControls(): void {
    this.name = new FormControl('', []);
    this.location = new FormControl('', []);
    this.notes = new FormControl('', []);
  }

  private createForm(): void {
      this.partyForm = new FormGroup({
          name: this.name,
          location: this.location,
          notes: this.notes
      });
  }

}
