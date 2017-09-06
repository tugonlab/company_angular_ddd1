import { Directive, ElementRef, HostListener, Input, OnInit, AfterViewInit } from '@angular/core';
declare var $: any
@Directive({
    selector: '[replace]'
})
export class replaceDirective implements AfterViewInit {
    userRoles = ["operator"]

    constructor(private el: ElementRef) {

    }

    ngAfterViewInit() {
        this.performReplace()
    }

    private performReplace() {
        
        var el = $(this.el.nativeElement)
        var parent = $(el[0].parentElement);
        var inner = el.html();
        el.detach();
        parent.append(inner);
    }
}