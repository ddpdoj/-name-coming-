import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancementCalculatorComponent } from './enhancement-calculator.component';

describe('EnhancementCalculatorComponent', () => {
  let component: EnhancementCalculatorComponent;
  let fixture: ComponentFixture<EnhancementCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnhancementCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancementCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
