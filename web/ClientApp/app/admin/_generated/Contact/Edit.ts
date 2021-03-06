﻿import { Component, NgModule, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactService } from '../../../services/generated/ContactService';
import { Contact } from '../../../models/Contact';

@Component({
	selector:'app-form-contact',
    templateUrl: './Edit.html',
    providers: [ContactService]
})
export class ContactEditComponent implements OnInit {

    constructor(private _service: ContactService) { }
	@Input() obj?: any;
	@Input() modal?: any;

	@Output() onSave?: EventEmitter<Contact> = new EventEmitter();

	@Input()
    contact: Contact;

    ngOnInit() {
        this.contact = this.contact || new Contact();
    }

	public save(contact) {
		this.onSave.emit(contact);
    }

	public closeEdit() {
		this.modal.hide();
	}

}
