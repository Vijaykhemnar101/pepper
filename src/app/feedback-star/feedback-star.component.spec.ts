import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackStarComponent } from './feedback-star.component';

describe('FeedbackStarComponent', () => {
  let component: FeedbackStarComponent;
  let fixture: ComponentFixture<FeedbackStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackStarComponent]
    });
    fixture = TestBed.createComponent(FeedbackStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
