import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../services/interface';
import { RocketLeagueService } from '../services/rocketleague.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist : IPlaylist;

  id : number = 1;

  constructor(private _svc : RocketLeagueService) { }

  ngOnInit() {
    this._svc.getPlaylist()
            .subscribe(result => this.playlist = result);
  }

  get platformId(){
    return this.id;
  }

  set platformId(value:number){
    this.id = value;
  }

}
