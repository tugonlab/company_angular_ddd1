import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { BaseService, HttpService } from '../../services/services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//////

@Injectable()
export class ImgService extends BaseService<string> {
    controller:string
    constructor(private _http: HttpService) {
        super(_http);
        this._controller="";
    }

    
}
