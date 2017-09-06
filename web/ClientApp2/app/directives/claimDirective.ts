import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[claim]',
    
})
export class claimDirective {

    @Input('claim') name: string;

    constructor(private el: ElementRef) {
        if (this.name = "nao")
            this.el.nativeElement.style.display = "none";
    }
}