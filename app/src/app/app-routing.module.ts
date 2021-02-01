import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './HEAD/film/film.component';
import { Main1Component } from './MAIN/main1/main1.component';
import { Main2Component } from './MAIN/main2/main2.component';
import { St1Component } from './MAIN/main1/st1/st1.component';
import { St2Component } from './MAIN/main1/st2/st2.component';
import { St3Component } from './MAIN/main1/st3/st3.component';
import { St4Component } from './MAIN/main2/st4/st4.component';
import { St5Component } from './MAIN/main2/st5/st5.component';
import { St6Component } from './MAIN/main2/st6/st6.component';
import { AgreeComponent } from './FOOT/agree/agree.component';
import { HolderComponent } from './FOOT/holder/holder.component';
import { SerialsComponent } from './HEAD/serials/serials.component';
import { FilmBatmanComponent } from './MAIN/film-batman/film-batman.component';
import { AddFilmComponent } from './MAIN/add-film/add-film.component';
import { FormsModule } from '@angular/forms';
import { MyFilmComponent } from './MAIN/my-film/my-film.component';
import { MyFilmsComponent } from './MAIN/my-films/my-films.component';

const routes: Routes = 
[
  { path: "", component: Main1Component},
  { path: "app-main1", component: Main1Component},
  { path: "app-main2", component: Main2Component},
  { path: "app-film", component: FilmComponent},
  { path: "app-serials", component: SerialsComponent},
  { path: "app-st1", component: St1Component},
  { path: "app-st2", component: St2Component},
  { path: "app-st3", component: St3Component},
  { path: "app-st4", component: St4Component},
  { path: "app-st5", component: St5Component},
  { path: "app-st5", component: St6Component},
  { path: "app-agree", component: AgreeComponent},
  { path: "app-holder", component: HolderComponent},
  { path: "app-film-batman", component: FilmBatmanComponent},
  { path: "app-adding", component: AddFilmComponent},
  { path: "app-my-film", component: MyFilmComponent},
  { path: "app-my-films", component: MyFilmsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
