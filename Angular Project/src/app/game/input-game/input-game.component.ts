import { Component, OnInit } from '@angular/core';
import { GuessTheNumber, GuessResult } from '../../common/GuessTheNumber';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input-game',
  templateUrl: './input-game.component.html',
  styleUrls: ['./input-game.component.scss']
})
export class InputGameComponent  {

  count: number = 10;
  game: GuessTheNumber = new GuessTheNumber(10);
  guesses: Guess[] = [];

  constructor(private route: ActivatedRoute) 
  {
      let max = this.route.snapshot.params['id']
      if (max != undefined)
          this.count = Number(max);
      this.game = new GuessTheNumber(this.count);
  }

  AddGuess(value: number) {
    if (value) {
      let result = this.game.DoGuess(value);
      this.guesses.push(new Guess(this.game.Attempts, value, result));
    }
  }
}

class Guess {
  constructor(public Attempt: number, public Value: number, public Result: GuessResult) {
  }

  get IsTooHigh(): boolean {
    return this.Result == GuessResult.TooHigh;
  }

  get IsTooLow(): boolean {
    return this.Result == GuessResult.TooLow;
  }

  get IsCorrect(): boolean {
    return this.Result == GuessResult.Correct;
  }
}

