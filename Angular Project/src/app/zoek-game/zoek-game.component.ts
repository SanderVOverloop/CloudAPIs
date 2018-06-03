import { Component, OnInit } from '@angular/core';
import { IGames } from '../services/interface';
import { EigenApiService } from '../services/eigenapi.service';

@Component({
  selector: 'app-zoek-game',
  templateUrl: './zoek-game.component.html',
  styleUrls: ['./zoek-game.component.scss']
})
export class ZoekGameComponent implements OnInit {

  game : IGames;
  id : number = 1;

  constructor(private _svc : EigenApiService) { }

  ngOnInit() {
    this.ChangeGame();
  }

  ChangeGame = () => {
    this._svc.getGame(this.id)
            .subscribe(result => this.game = result);
  }

  get gameId(){
    return this.id;
  }
  
  set gameId(value: number){
    this.id = value;
    this.ChangeGame();
  }

}
