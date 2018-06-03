import { Component, OnInit } from '@angular/core';
import { IGames } from '../services/interface';
import { EigenApiService } from '../services/eigenapi.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games : IGames;

  constructor(private _svc : EigenApiService) { }

  ngOnInit() {
    this._svc.getGames()
            .subscribe(result => this.games = result);
  }

}
