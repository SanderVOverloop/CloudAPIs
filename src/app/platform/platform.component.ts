import { Component, OnInit } from '@angular/core';
import { IPlatform } from '../services/interface';
import { RocketLeagueService } from '../services/rocketleague.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  platforms : IPlatform;

  constructor(private _svc : RocketLeagueService) { }

  ngOnInit() {
    this._svc.getPlatform()
            .subscribe(result => this.platforms = result);  
  }

}
