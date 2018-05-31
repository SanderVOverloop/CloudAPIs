import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuessResult, GuessTheNumber } from '../../common/GuessTheNumber';
import * as _ from "lodash"

@Component({
  selector: 'app-button-game',
  templateUrl: './button-game.component.html',
  styleUrls: ['./button-game.component.scss']
})
export class ButtonGameComponent {
  count: number = 10;
  numbers: number[];
  game: GuessTheNumber;
  mustbeMin: number = 0;
  mustbeMax: number = this.count;
  attempts: number;
  guessResult: GuessResult = GuessResult.TooLow;

  constructor(private route: ActivatedRoute) {
    let max = this.route.snapshot.params['id']
    if (max != undefined)
      this.count = Number(max);
    this.mustbeMax = this.count;
    this.game = new GuessTheNumber(this.count);
    this.numbers = _.range(0, this.count + 1);
  }

  keyPress(guess: number) {
    if (this.guessResult == GuessResult.Correct) return;

    this.guessResult = this.game.DoGuess(guess);
    if (this.guessResult == GuessResult.TooHigh) {
      this.mustbeMax = guess - 1;
      console.log(`my guess is ${guess} and was too high`);
    }
    else if (this.guessResult == GuessResult.TooLow) {
      this.mustbeMin = guess + 1;
      console.log(`my guess is ${guess} and was too low`);
    }
    else {
      this.mustbeMin = guess;
      this.mustbeMax = guess;
      console.log(`my guess is ${guess}`);
    }
    this.attempts = this.game.Attempts;
  }

  Restart() {
    this.game = new GuessTheNumber(this.count);
    this.mustbeMin = 0;
    this.mustbeMax = this.count;
    this.attempts = 0;
    this.guessResult = 0;
  }
}
