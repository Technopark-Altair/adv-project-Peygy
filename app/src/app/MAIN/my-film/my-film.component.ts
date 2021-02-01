import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/models/film.module';
import { ProposedFilmsService } from 'src/services/proposed-films.service';

@Component({
  selector: 'app-my-film',
  templateUrl: './my-film.component.html',
  styleUrls: ['./my-film.component.css']
})
export class MyFilmComponent implements OnInit {
  @Input() filmInput: Film;

  film: Film;
  constructor(private propService: ProposedFilmsService) { }

  ngOnInit(): void {
  }

}
