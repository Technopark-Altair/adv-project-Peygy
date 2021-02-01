import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Film } from 'src/models/film.module';
import { ProposedFilmsService } from 'src/services/proposed-films.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  film: Film;
  @Output() addNewFilm = new EventEmitter<Film>();
  constructor(private propService: ProposedFilmsService) { }

  ngOnInit(): void 
  {
    this.film = new Film();
  }

  AddFilmInArray()
  {
    this.addNewFilm.emit(this.film);
    this.film = new Film();
  }
}
