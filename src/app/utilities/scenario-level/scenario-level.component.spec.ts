import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioLevelComponent } from './scenario-level.component';

describe('ScenarioLevelComponent', () => {
  let component: ScenarioLevelComponent;
  let fixture: ComponentFixture<ScenarioLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
