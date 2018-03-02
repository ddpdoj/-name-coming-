import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterHealthComponent } from './monster-health.component';

describe('MonsterHealthComponent', () => {
  let component: MonsterHealthComponent;
  let fixture: ComponentFixture<MonsterHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
