import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact } from '../../models/Contact';
import { ContactService } from '../generated/ContactService';

@Injectable()
export class ContactCustomService extends ContactService {

    constructor(protected _http: HttpService) {
        super(_http);
    }
    
    sendEmail(contact: Contact) :Observable<any>{
        return this._http.post(this._controller + "/sendEmail/", contact);
           // .map((response: Response) => <Contact[]>response.json());
    }
}
