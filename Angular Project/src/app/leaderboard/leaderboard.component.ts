import { Component, OnInit } from '@angular/core';
import { ILeaderboard } from '../services/interface';
import { RocketLeagueService } from '../services/rocketleague.service'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboard : ILeaderboard;

  constructor(private _svc : RocketLeagueService) { }

  ngOnInit() {
    this._svc.getLeaderboard()
            .subscribe(result => this.leaderboard = result);
  }

}
