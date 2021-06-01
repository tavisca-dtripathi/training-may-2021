import { Directive, ElementRef, Renderer2, Input, HostListener, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[setAlertColor]'
})
export class AlertDirective {
    constructor(private ele: ElementRef, private renderer: Renderer2) { }

    @Input('setAlertColor') setAlertColor: string = '';

    // method for logic
    private applyColor(color: string): void {
        // defining a new renderingn of the HTML element by applying
        this.renderer.setStyle(this.ele.nativeElement, 'border-color', color);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.setAlertColor === 'red')
            this.applyColor(this.setAlertColor);
        else if (this.setAlertColor === '')
            this.applyColor('');
    }
}