import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastMapsComponent } from './fast-maps.component';

describe('FastMapsComponent', () => {
  let component: FastMapsComponent;
  let fixture: ComponentFixture<FastMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
