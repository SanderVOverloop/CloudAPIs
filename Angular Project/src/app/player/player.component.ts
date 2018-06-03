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
  page : number = 0;

  //Bij ingeven naam krijg je: Cannot read property 'getPlayers' of undefined

  constructor(private _svc : RocketLeagueService) { }

  ngOnInit() {
    this._svc.getPlayers(this.name, this.pageNr)
            .subscribe(result => this.players = result);
  }

  ChangeName(){
    this._svc.getPlayers(this.name, this.pageNr)
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

  get pageNr(){
    return this.page;
  }

  set pageNr(value:number){
    this.pageNr = value;
    setTimeout(this.ChangeName,1000);
  }

}
