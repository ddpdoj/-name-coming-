import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAchievementsComponent } from './global-achievements.component';

describe('GlobalAchievementsComponent', () => {
  let component: GlobalAchievementsComponent;
  let fixture: ComponentFixture<GlobalAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
