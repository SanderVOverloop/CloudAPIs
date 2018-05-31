import { Component, OnInit } from '@angular/core';
import { ISeason } from '../services/interface';
import { RocketLeagueService } from '../services/rocketleague.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  seasons : ISeason;

  constructor(private _svc : RocketLeagueService) { }

  ngOnInit() {
    this._svc.getSeason()
            .subscribe(result => this.seasons = result);
  }

}
