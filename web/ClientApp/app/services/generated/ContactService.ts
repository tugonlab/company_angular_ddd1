import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { BaseService, HttpService } from '../services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact } from '../../models/Contact';

@Injectable()
export class ContactService extends BaseService<Contact> {

    constructor(protected _http: HttpService) {
        super(_http);
		this._controller = "Contact";
    }

    
}
