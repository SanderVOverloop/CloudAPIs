import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WeatherComponent } from './weather/weather.component';
import { DeLijnComponent } from './de-lijn/de-lijn.component';
import { RouterModule } from "@angular/router";
import { CalcComponent } from './calc/calc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { GameOverviewComponent } from './game/game-overview/game-overview.component';
import { InputGameComponent } from './game/input-game/input-game.component';
import { ButtonGameComponent } from './game/button-game/button-game.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { DeLijnService } from './services/delijn.service';
import { PlatformComponent } from './platform/platform.component';
import { RocketLeagueService } from './services/rocketleague.service';
import { SeasonComponent } from './season/season.component';
import { PlaylistComponent } from './playlist/playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    WeatherComponent,
    DeLijnComponent,
    CalcComponent,
    PageNotFoundComponent,
    NavBarComponent,
    GameOverviewComponent,
    InputGameComponent,
    ButtonGameComponent,
    PlatformComponent,
    SeasonComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'game', component: GameOverviewComponent},
      { path: 'game/:id', component: GameOverviewComponent},
      { path: 'calc', component: CalcComponent},
      { path: 'calculator', component: CalcComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: "**", component: PageNotFoundComponent}
    ], { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    WeatherService,
    DeLijnService,
    RocketLeagueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
