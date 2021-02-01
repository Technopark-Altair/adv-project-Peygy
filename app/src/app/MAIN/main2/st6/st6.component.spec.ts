import { ComponentFixture, TestBed } from '@angular/core/testing';

import { St6Component } from './st6.component';

describe('St6Component', () => {
  let component: St6Component;
  let fixture: ComponentFixture<St6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ St6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(St6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
