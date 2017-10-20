import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth';
import { Config } from '../config';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private _router: Router, private config: Config) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.config.useAuthorityServer)
            return true;
        const url = state.url;
        const logged = this.authService.isLoggedIn();
        if (!logged) {
            if (url)
                this.authService.setCallbackUrl(url);
            this.authService.login();
            return;
        }
        return logged;
    }
}
