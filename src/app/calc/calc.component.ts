import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {

  expr: string = "";
  error: string;
  keyPress(key: HTMLButtonElement) {
    this.expr += key.value;
  }

  calculate() {
    try {
      this.expr = eval(this.expr)
    }
    catch (a) {
      this.error = (<Error>a).message
      setTimeout(() => this.error = "", 2000);
    }
  }
  clearScreen() {
    this.expr = "";
  }

  back() {
    this.expr = this.expr.substr(0, this.expr.length - 1)
  }

}
