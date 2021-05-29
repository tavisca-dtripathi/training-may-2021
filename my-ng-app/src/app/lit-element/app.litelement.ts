import { LitElement, customElement, html, property, css } from "lit-element";

@customElement('app-lit-element')
export class AppLitElement extends LitElement {

    [x: string]: any;

    @property({ type: Array }) list;

    static get styles() {
        return css`
        li {
                background-color: 'red';
                color:'yellow';
            }`;
    }

    constructor() {
        super();
        this.list = new Array<any>();
    }


    render() {
        return html`
        <div>
        <ul>
          ${this.list.map((i) => html`<li>${i}</li>`)}
        </ul>
        </div>
      `;
    }
}