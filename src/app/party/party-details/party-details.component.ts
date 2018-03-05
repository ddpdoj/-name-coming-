import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { CoreService } from '../../core/services/core.service';

@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.scss']
})
export class PartyDetailsComponent implements OnInit {

  public partyForm: FormGroup;
  public name: FormControl =  new FormControl();
  public location: FormControl = new FormControl();
  public notes: FormControl = new FormControl();

  constructor(public service: CoreService) { }

  ngOnInit() {
    // this.createFormControls();
    // this.createForm();
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
