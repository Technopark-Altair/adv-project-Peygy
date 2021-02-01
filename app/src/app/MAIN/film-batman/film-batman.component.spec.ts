import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmBatmanComponent } from './film-batman.component';

describe('FilmBatmanComponent', () => {
  let component: FilmBatmanComponent;
  let fixture: ComponentFixture<FilmBatmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmBatmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmBatmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
