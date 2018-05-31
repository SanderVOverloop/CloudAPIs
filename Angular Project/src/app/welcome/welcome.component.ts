import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  imageUrl : string;// = "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(96).jpg"
  images: number[] = [1,2,4,6,10,34,45,77,99,102,140];
  private _nr : number = 1;

  constructor() { }

  ngOnInit() {
    this.SetImage();
    //Als je hier als callback een functie gebruikt,
    //maak dan steeds een lambda functie !
    setInterval(this.ChangeImage , 2000);
  }

  ChangeImage = () =>
  {
    this._nr = this.images[_.random(0,this.images.length - 1)];
    this.SetImage()
  }

  get imageNr()
  {
      return this._nr;
  }

  set imageNr(value: number)
  {
      this._nr = value;
      this.SetImage()
  }

  SetImage ()
  {
    this.imageUrl = `https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(${this._nr}).jpg`;
  }
}
