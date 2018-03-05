import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCalculatorsComponent } from './map-calculators.component';

describe('MapCalculatorsComponent', () => {
  let component: MapCalculatorsComponent;
  let fixture: ComponentFixture<MapCalculatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCalculatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
