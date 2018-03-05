import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyAchievementsComponent } from './party-achievements.component';

describe('PartyAchievementsComponent', () => {
  let component: PartyAchievementsComponent;
  let fixture: ComponentFixture<PartyAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
