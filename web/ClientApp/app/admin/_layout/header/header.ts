import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth';

declare var $: any;
@Component({
    
    selector: 'admin-header',
    templateUrl: './header.html'
})
export class HeaderAdminComponent implements OnInit {
    isLoggedIn: boolean
    constructor(private _auth: AuthService) {

        this.isLoggedIn = this._auth.isLoggedIn();

        this._auth.onLogin.subscribe(result => {
            this.isLoggedIn = this._auth.isLoggedIn();
        })
        this._auth.onLogout.subscribe(result => {
            this.isLoggedIn = this._auth.isLoggedIn();
        })
    }

    login() {
        this._auth.callLoginPage();
    }

    logout() {
        //if (this._auth.isLoggedIn())
            this._auth.logout();
    }

    ngOnInit() {
        this.isLoggedIn = this._auth.isLoggedIn()
    }

    toggleMenu(){
        
    }


}
