import { Injectable } from '@angular/core';
import { Film } from 'src/models/film.module';
import { fileName } from 'vime/core/targets/targetHelpers';

@Injectable({
  providedIn: 'root'
})
export class ProposedFilmsService {

  films: Array<Film> =
  [
    
  ];

  constructor() { }
  getFilms()
  {
    return this.films;
  }

  getFilm(id: number)
  {
    return this.films.find((el) => el.id === id);
  }

  addFilm(film: Film)
  {
    film.id = this.getFilms().length;
    this.films.push(film);
  }
}
