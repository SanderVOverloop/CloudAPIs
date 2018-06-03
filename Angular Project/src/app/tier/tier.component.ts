import { Component, OnInit } from '@angular/core';
import { ITier } from '../services/interface';
import { RocketLeagueService } from '../services/rocketleague.service';

@Component({
  selector: 'app-tier',
  templateUrl: './tier.component.html',
  styleUrls: ['./tier.component.scss']
})
export class TierComponent implements OnInit {

tier : ITier;

  constructor(private _svc : RocketLeagueService) { }

  ngOnInit() {
    this._svc.getTier()
            .subscribe(result => this.tier = result);
  }

}
