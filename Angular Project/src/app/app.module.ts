import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlatformComponent } from './platform/platform.component';
import { SeasonComponent } from './season/season.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DevelopersComponent } from './developers/developers.component';
import { GamesComponent } from './games/games.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RocketLeagueService } from './services/rocketleague.service';
import { EigenApiService } from './services/eigenapi.service';
import { TierComponent } from './tier/tier.component';
import { EigenApiComponent } from './eigen-api/eigen-api.component';
import { ZoekGameComponent } from './zoek-game/zoek-game.component';
import { PlaylistcompComponent } from './playlistcomp/playlistcomp.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    PlatformComponent,
    SeasonComponent,
    PlaylistComponent,
    DevelopersComponent,
    GamesComponent,
    LeaderboardComponent,
    TierComponent,
    EigenApiComponent,
    ZoekGameComponent,
    PlaylistcompComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'games', component: GamesComponent},
      { path: 'games/:id', component: GamesComponent},
      { path: 'leaderboard', component: LeaderboardComponent},
      { path: 'playlist', component: PlaylistcompComponent},
      { path: 'player', component: PlayerComponent},
      { path: 'eigenapi', component: EigenApiComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: "**", component: PageNotFoundComponent}
    ], { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    RocketLeagueService,
    EigenApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
