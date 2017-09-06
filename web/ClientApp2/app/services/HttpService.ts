import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from '../auth/auth';
import { Config } from '../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
declare var $: any;
@Injectable()
export class HttpService {
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http, private config: Config, private _auth: AuthService, private _route: Router) {
        this.setHeader("Content-Type", "application/json");
        this._auth.onLogout.subscribe(result => {
            this.headers.delete("Authorization");
        });
    }

    setHeader(key: string, value: string) {
        this.headers = new Headers();
        this.headers.append(key, value);

        this.appendToken();
        return this.headers;
    }

    appendToken() {
        if (this._auth.isLoggedIn()) {
            if (!this.headers.get("Authorization"))
                this.headers.append("Authorization", "Bearer " + this._auth.getToken())
        }

        this.options = new RequestOptions({ headers: this.headers });
    }

    prepareUrl(url): string {
        if (url.indexOf("://") === -1)
            return this.config.apiAddress + url;
        return url;
    }

    upload(url: string, files, obj: any) {
        var formData = this.loadData(files, obj);
        this.setHeader("Content-Type", undefined);
        this.setHeader("enctype", "multipart/form-data");

        return this.http.post(this.prepareUrl(url), formData, this.options).map(x => {
            this.headers.delete("enctype");
            this.setHeader("Content-Type", "application/json");
            return x;
        })


    }

    private loadData(files, obj: any) {
        var data = new FormData();
        if (obj) {
            data.append("model", JSON.stringify(obj));
        }
        if (files && files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                data.append("file" + i, files[i]);
            }
        }
        return data;
    }

    post(url: string, object: any) {
        this.appendToken();
        return this.http.post(this.prepareUrl(url), JSON.stringify(object), this.options)
            .map(res => {
                if (res.url && res.url.toLowerCase().indexOf("login") >= 0) {
                    window.location.href = res.url;
                }
                return res;
            })
            .catch((error: Response) => {
                return this.handleRequest(error)
            });
    }

    get(url: string, params?: any) {
        this.appendToken();
        return this.http.get(this.prepareUrl(url + (params ? "?"+$.param(params) : '')), this.options)
            .map(res => {
                if (res.url && res.url.toLowerCase().indexOf("login") >= 0) {
                    window.location.href = res.url;
                }
                return res;
            })
            .catch((error: Response) => {
                return this.handleRequest(error)
            });
    }

    handleRequest(error: Response) {
        if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
            console.log('The authentication session expires or the user is not authorised. Force refresh of the current page.');
            this._auth.login();
        }
        return Observable.throw(error);
    }
}




