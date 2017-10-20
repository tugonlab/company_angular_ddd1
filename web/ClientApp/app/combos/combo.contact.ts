import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../services/generated/ContactService';
import { Contact } from '../models/Contact';

@Component({
    
    selector: 'app-combo-contact',
    template: `
	<select [ngModel]=model (ngModelChange)="updateData($event)"  name="contact" class="{{cssClass}}" >
		<option *ngFor="let contact of contactList" [value]="contact.id">{{contact.name}}</option>
	</select>`,
	providers: [ContactService]
})
export class ComboContactComponent implements OnInit{
	errorMessage: string;
    contact: Contact;
	contactList: Contact[];

	@Input() cssClass?: string;

	@Input() model: any;
	
	@Output() modelChange: any = new EventEmitter();   

	constructor(private _service: ContactService) {
 
    }

	updateData(event) {
		this.model = event;
		this.modelChange.emit(event);
	}

    ngOnInit() {
        this.contact = new Contact();
		this.getAll();
    }

    public getAll() {
		this._service.getAll()
		.subscribe(
			result => {
				this.contactList = result;
			},
			error => {
				this.errorMessage = error;
			}
		);
    }

}
