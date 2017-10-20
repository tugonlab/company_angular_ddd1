import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './auth';
import { HttpService } from '../services/services';
import { Router, NavigationEnd, Params } from '@angular/router';
import { LoginModel } from '../models/loginModel';
declare var $: any;
class User {
    username;
    password;
}
@Component({
    templateUrl: './callback.html',

})
export class LoginCallBackComponent implements OnInit {
    user: User;
    errorMessage: string;
    loginModel: LoginModel;

    ngOnInit() {
        const params = this._router.parseUrl(this._router.url).queryParams;

        if (window.location.hash ) {
            this._auth.callBack();
            //return;
        }
        if (params['logoutId']) {
            const url = this._auth.getLogoutUrl() || 'home';
            this._router.navigate([url]);
            this._auth.clearLogoutUrl();
        }
    }


    constructor(private _auth: AuthService, private _router: Router) {

        this.user = new User();

        this._router.events.subscribe((val) => {
            //if (val instanceof NavigationEnd)
            // this.showModal();
        }
        );


        this._auth.onLogin.subscribe(result => {
            //this.hideModal();
        });
    }

    //this.modal.config.backdrop = false;


}
