import { ComponentFixture, TestBed } from '@angular/core/testing';

import { St5Component } from './st5.component';

describe('St5Component', () => {
  let component: St5Component;
  let fixture: ComponentFixture<St5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ St5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(St5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
