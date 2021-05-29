import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  title = 'ng-calc';

  display: string;
  constructor() {
    this.display = '0';
  }

  addChar(char: string) {
    if (this.display == null || this.display == "0")
      this.display = char;
    else
      this.display += char;
  }

  deleteChar() {
    this.display = this.display.substring(0, this.display.length - 1)
  }

  percentage() {
    this.display = this.display + "%";
  }

  squareRoot(){
    this.display = Math.sqrt(eval(this.display)).toString();
  }

  calculate() {
    this.display = eval(this.display).toString();
  }

  square() {
    this.display = (eval(this.display) * eval(this.display)).toString();
  }

  clearDisplay(){
    this.display = "0";
  }

  ngOnInit(): void {
  }

}
