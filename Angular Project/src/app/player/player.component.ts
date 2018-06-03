import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../services/interface';
import { RocketLeagueService } from '../services/rocketleague.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  players : IPlayer;
  name : string = "Mike";

  constructor(private _svc : RocketLeagueService) { }

  ngOnInit() {
    this.ChangeName();
  }

  ChangeName(){
    this._svc.getPlayers(this.name)
            .subscribe(result => this.players = result);
  }

  get playerName(){
    return this.name;
  }

  set playerName(value:string){
    this.name = value;
    //this.ChangeName();
    setTimeout(this.ChangeName, 1000);
  }

}
