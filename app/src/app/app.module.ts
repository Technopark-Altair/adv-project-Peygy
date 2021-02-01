import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VimeModule } from '@vime/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { AppRoutingModule } from './app-routing.module';
import { AsideComponent } from './aside/aside.component';
import { FilmComponent } from './HEAD/film/film.component';
import { SerialsComponent } from './HEAD/serials/serials.component';
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
import { FilmBatmanComponent } from './MAIN/film-batman/film-batman.component';
import { AddFilmComponent } from './MAIN/add-film/add-film.component';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { TapSidesToSeekComponent } from './tap-sides-to-seek/tap-sides-to-seek.component';
import { MyFilmsComponent } from './MAIN/my-films/my-films.component';
import { MyFilmComponent } from './MAIN/my-film/my-film.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddressComponent,
    AsideComponent,
    FilmComponent,
    SerialsComponent,
    Main1Component,
    Main2Component,
    St1Component,
    St2Component,
    St3Component,
    St4Component,
    St5Component,
    St6Component,
    AgreeComponent,
    HolderComponent,
    FilmBatmanComponent,
    AddFilmComponent,
    ArticleComponent,
    TapSidesToSeekComponent,
    MyFilmsComponent,
    MyFilmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    VimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
