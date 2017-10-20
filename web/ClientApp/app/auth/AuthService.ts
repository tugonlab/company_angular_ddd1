import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Config } from '../config';
import { LoginModel } from '../models/loginModel';
import { OidcSecurityService } from './oidc.security.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

declare var $: any;

@Injectable()
export class AuthService {

    headers: Headers;
    options: RequestOptions;
    token: string;
    id_token: string;
    callbackUrl: string;
    onLogin: EventEmitter<string> = new EventEmitter();
    onLogout: EventEmitter<string> = new EventEmitter();

    constructor(private _http: Http, private _config: Config, private _router: Router, private securityService: OidcSecurityService) {
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    isLoggedIn(): boolean {
        return this.securityService.IsAuthorized();
    }

    getToken(): string {
        return this.securityService.GetToken();
    }

    getIdToken(): string {
        return this.securityService.GetIdToken();
    }

    callLoginPage() {
        this.login();
    }

    callBack() {
        this.securityService.AuthorizedCallback();
        if (this.securityService.IsAuthorized()) {
            this.onLogin.emit(this.token);
            if (this.getCallbackUrl()) {
                window.location.href = this.getCallbackUrl();

                return;
            } else {

                this._router.navigate['home'];
            }

        }
    }

    public login() {
        console.log('Do login logic');
        this.securityService.Authorize();
    }

    public logout(url?: any) {
        if (url) {
            this.setLogoutUrl(url);
        }
        this.clearToken();
        this.securityService.Logoff();

    }

    signIn(loginModel: LoginModel): Observable<string> {
        const user = {
            username: loginModel.username,
            password: loginModel.password,
            grant_type: 'password',
            scope: (loginModel.scope || this._config.scope), //+ " refresh_token",
            client_id: loginModel.client_id || this._config.client_id,
            client_secret: loginModel.client_secret,
            redirect_uri: loginModel.redirect_uri || this._config.redirect_url
        };

        return this._http.post(this._config.authorityAddress + '/connect/token/', $.param(user), this.options).map(
            (result: Response) => {
                const token = <any>result.json();
                this.token = token.access_token;
                this.id_token = token.id_token;
                localStorage.setItem('token', this.token);
                localStorage.setItem('id_token', this.id_token);
                this.onLogin.emit(this.token);
                window.location.href = user.redirect_uri;
                return this.token;
            },
            (err: any) => {
                localStorage.removeItem('token');
                return err;
            }
        );

    }
    appendToken() {
        if (this.isLoggedIn()) {
            if (!this.headers.get('Authorization'))
                this.headers.append('Authorization', 'Bearer ' + this.getToken());
        }

        this.options = new RequestOptions({ headers: this.headers });
    }

    userInfo() {
        const result = sessionStorage.getItem('userData');
        if (result)
            return <any>JSON.parse(result);
        return this.securityService.UserData;
    }

    private clearToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('id_token');
        sessionStorage.removeItem('userData');
        this.id_token = null;
        this.token = null;
    }

    public setCallbackUrl(url) {
        this.callbackUrl = url;
        sessionStorage.setItem('callback_url', url);
    }

    public getCallbackUrl() {
        const url = sessionStorage.getItem('callback_url');
        return url;
    }

    public clearCallbackUrl() {
        sessionStorage.removeItem('callback_url');
    }

    public setLogoutUrl(url) {
        this.callbackUrl = url;
        sessionStorage.setItem('logout_url', url);
    }

    public getLogoutUrl() {
        const url = sessionStorage.getItem('logout_url');
        return url;
    }

    public clearLogoutUrl() {
        sessionStorage.removeItem('logout_url');
    }
}
