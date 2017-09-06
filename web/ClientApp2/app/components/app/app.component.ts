import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { AuthService } from '../../auth/auth';

@Component({
    
    selector: 'app',
    templateUrl: './app.component.html',
    //styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn: boolean;

    constructor(translate: TranslateService, private _auth: AuthService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        this.isLoggedIn = this._auth.isLoggedIn();
    }

    public Login() {
        this._auth.login();
    }

    public Logout() {
        this._auth.logout();
    }

}
