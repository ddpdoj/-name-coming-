import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsperityComponent } from './prosperity.component';

describe('ProsperityComponent', () => {
  let component: ProsperityComponent;
  let fixture: ComponentFixture<ProsperityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsperityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsperityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
