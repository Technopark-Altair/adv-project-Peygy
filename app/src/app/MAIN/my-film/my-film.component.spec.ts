import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilmComponent } from './my-film.component';

describe('MyFilmComponent', () => {
  let component: MyFilmComponent;
  let fixture: ComponentFixture<MyFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
