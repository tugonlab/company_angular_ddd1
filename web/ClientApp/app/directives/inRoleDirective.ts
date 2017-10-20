import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
declare var $: any;
@Directive({
    selector: '[inRole]'
})
export class inRoleDirective implements OnInit {
    userRoles = ['operator'];
    @Input('inRole') roles: Array<string> = [];

    constructor(private el: ElementRef) {

    }

    ngOnInit() {
        this.checkRoles();
    }

    private checkRoles() {
        let i = 0;
        //this.el.nativeElement.style.display = "none";
        this.roles.forEach((obj, index) => {
            if (this.userRoles.indexOf(this.roles[index]) >= 0) {
                i++;
                return;
            }
        });
        if (i == 0) {
            const el = $(this.el.nativeElement);
            el.detach();
        }
    }
}
