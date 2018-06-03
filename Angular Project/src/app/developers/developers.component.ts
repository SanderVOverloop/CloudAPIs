import { Component, OnInit } from '@angular/core';
import { IDevelopers } from '../services/interface';
import { EigenApiService } from '../services/eigenapi.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  developers : IDevelopers;

  constructor(private _svc : EigenApiService) { }

  ngOnInit() {
    this._svc.getDevelopers()
            .subscribe(result => this.developers = result);
  }

}
