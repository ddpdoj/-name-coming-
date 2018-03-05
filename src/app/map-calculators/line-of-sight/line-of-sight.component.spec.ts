import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOfSightComponent } from './line-of-sight.component';

describe('LineOfSightComponent', () => {
  let component: LineOfSightComponent;
  let fixture: ComponentFixture<LineOfSightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineOfSightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineOfSightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
