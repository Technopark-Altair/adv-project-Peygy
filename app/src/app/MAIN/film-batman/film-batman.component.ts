import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-film-batman',
  templateUrl: './film-batman.component.html',
  styleUrls: ['./film-batman.component.css']
})
export class FilmBatmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Obtain a ref if you need to call any methods.
  @ViewChild('player') player!: Player;

  onPlaybackReady() {
    // ...
  }

}
