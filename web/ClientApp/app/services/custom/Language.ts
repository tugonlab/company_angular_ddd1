import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//////

import { Language } from '../../models/Language';
import { LanguageService } from '../generated/LanguageService';

@Injectable()
export class LanguageCustomService extends LanguageService {

    constructor(protected _http: HttpService) {
        super(_http);
    }  
}
