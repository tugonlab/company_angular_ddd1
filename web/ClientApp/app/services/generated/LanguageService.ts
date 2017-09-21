import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { BaseService, HttpService } from '../services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Language } from '../../models/Language';

@Injectable()
export class LanguageService extends BaseService<Language> {

    constructor(protected _http: HttpService) {
        super(_http);
		this._controller = "Language";
    }

    
}
