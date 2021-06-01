import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-input-component',
  templateUrl: './my-input-component.component.html',
  styleUrls: ['./my-input-component.component.css']
})
export class MyInputComponentComponent implements OnInit {
  
  @Input() placeholder : string;

  inputText : string;
  constructor() { 
    this.placeholder = '';
    this.inputText = '';
  }

  onKeyUp($event: KeyboardEvent) {
    if(this.inputText.length > 0 && $event.key === 'Backspace'){
      this.inputText = this.inputText.slice(0,this.inputText.length-1);
    }
    else if($event.key !== 'Backspace' && !$event.metaKey && !$event.ctrlKey && !$event.shiftKey && !$event.altKey){
      console.log($event.key);
      this.inputText += $event.key;
    }
  }

  ngOnInit(): void {
  }

}
