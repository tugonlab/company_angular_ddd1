import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth';

@Component({
    
    selector: 'admin-nav-menu',
    templateUrl: './navmenu.html',
    styleUrls: ['./navmenu.css']
})
export class NavMenuAdminComponent {
    isLoggedIn: boolean;
    user: any = {}
    constructor(private _auth: AuthService) {
        this._auth.onLogin.subscribe(result => {
            this.isLoggedIn = this._auth.isLoggedIn();
        })
        this._auth.onLogout.subscribe(result => {
            this.isLoggedIn = this._auth.isLoggedIn();
        })
        if (this._auth.isLoggedIn())
            this.user = this._auth.userInfo();
            //this._auth.userInfo().subscribe(
            //    result => {
            //        this.user = result;
            //    }
            //)
    }

    myAlert(msg){

    }
}
