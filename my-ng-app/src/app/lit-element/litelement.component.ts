import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'litelement-component',
    template: `
       <h1>Using LitElement in Angular Application</h1>
       <app-lit-element [list]="values"></app-lit-element>
    `
})

export class LitElementComponent implements OnInit {
    values: Array<string>;
    constructor() {
        this.values = new Array<string>();
        this.values.push('CaptainAmerica');
        this.values.push('Hulk');
        this.values.push('IronMan');
        this.values.push('Thor');
        this.values.push('AntMan');
        this.values.push('BlackPanther');
        this.values.push('SpiderMan');
    }

    ngOnInit() { }
}
