import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPlayerComponent } from './question-player.component';

describe('QuestionPlayerComponent', () => {
  let component: QuestionPlayerComponent;
  let fixture: ComponentFixture<QuestionPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
