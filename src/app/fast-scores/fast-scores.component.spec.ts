import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastScoresComponent } from './fast-scores.component';

describe('FastScoresComponent', () => {
  let component: FastScoresComponent;
  let fixture: ComponentFixture<FastScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
