import { Component, OnInit } from '@angular/core';
import { Film } from 'src/models/film.module';
import { ProposedFilmsService } from 'src/services/proposed-films.service';
import { AddFilmComponent } from '../add-film/add-film.component';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent implements OnInit {

  films: Array<Film>;
  constructor(private propService: ProposedFilmsService) { }

  ngOnInit(): void 
  {
    this.films = this.propService.getFilms();
  }

  addingNewFilm(newFilm: Film)
  {
    this.propService.addFilm(newFilm);
  }

}
