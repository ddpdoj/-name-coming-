import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterStatusComponent } from './monster-status.component';

describe('MonsterStatusComponent', () => {
  let component: MonsterStatusComponent;
  let fixture: ComponentFixture<MonsterStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
