import { Component, NgModule, Input, Output, OnInit, ViewChild, EventEmitter, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ContactService } from '../../../services/generated/ContactService';
import { Contact } from '../../../models/Contact';
import { ContactEdit } from './Edit';
import { PagingModel } from '../../../models/PagingModel';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

///child

import { TranslateService } from 'ng2-translate';
declare var $:any;

@Component({
    
	selector: 'list-Contact',
    templateUrl: './Index.html',
    providers: [
		ContactService
	]
})
export class ContactIndex implements OnInit, OnChanges {

	page: PagingModel<Contact>;
	errorMessage: string;
    contact: Contact;
	contactList: Contact[];
	@Input()
	autoLoad=true;
	@ViewChild('contactModal') 
	public contactModal:TemplateRef<any>;
	private modalRef: NgbModalRef;
	
	constructor( private _service: ContactService, public translate: TranslateService,private _modalService: NgbModal	) {
		this.page = _service.page;
		this.contact = new Contact();
    }

	ngOnInit() {
		this.load();
	}

	ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
    }

	hideModal(){
		this.modalRef.close();
	}

	private openModal(modal){		
		this.modalRef = this._modalService.open(modal);
	}

	pageChanged(event) {
		this.autoLoad = true;
		this.load();
	}

    load() {
		if(!this.autoLoad)
			return;

		this.getAll();
    }



	public save(contact, modal) {
		var $this = this;

        this._service.save(contact, $("input[type=file]")).subscribe(
			result => {
				this.contact = result;
				if(!this.contactList)
					this.contactList = [];
				if(!contact.id)
					this.contactList.push(result);
				else {
                    var f = this.contactList.filter(x => x.id == result.id);
					if(f)
						f[0] = result;
                }
				this.modalRef.close();
			},
			error => {
				this.errorMessage = error;
			}
		);
    }


    public getAll() {
		this._service.getPage(this.page)
		.subscribe(
			result => {
				this.page.totalCount = result.totalCount; 
				this.contactList = result.list;
			},
			error => {
				this.errorMessage = error;
			}
		);
    }

	public openEdit(entity?: Contact, modal?:any ){
		this.contact = entity || new Contact();
		//this._service.emit("onOpenEdit",entity);
		if(entity){
		}
		this.openModal(this.contactModal);
	}


	public remove(contact:Contact, index:number) {
		var msg = this.translate.instant('CONTACT.GRID.CONFIRM_DELETE');
		if(confirm(msg)){
			this._service.remove(contact).subscribe(
				result => {
					//this.contact = result;
					this.contactList.splice(index,1)
				},
				error => {
					this.errorMessage = error;
				}
			);
		}
    }
}
