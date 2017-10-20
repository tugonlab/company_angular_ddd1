import { Component, NgModule, Input, Output, OnInit, ViewChild, EventEmitter, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactService } from '../../../services/generated/ContactService';
import { Contact } from '../../../models/Contact';
import { ContactEditComponent } from './Edit';
import { PagingModel } from '../../../models/PagingModel';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ToasterService } from 'angular2-toaster';

///child

declare var $: any;

@Component({
	selector: 'app-list-contact',
    templateUrl: './Index.html',
    providers: [
		ContactService
	]
})
export class ContactIndexComponent implements OnInit, OnChanges {

	page: PagingModel<Contact>;
	errorMessage: string;
    contact: Contact;
	contactList: Contact[];
	@Input() autoLoad = true;
	@ViewChild('contactModal')
	public contactModal: TemplateRef<any>;
	private modalRef: NgbModalRef;

	constructor( private _service: ContactService,
		public translate: TranslateService,
		private _modalService: NgbModal,
		private _toasterService: ToasterService	) {
		this.page = _service.page;
		this.contact = new Contact();
    }

	ngOnInit() {
		this.load();
	}

	ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

	hideModal() {
		this.modalRef.close();
	}

	private openModal(modal) {
		this.modalRef = this._modalService.open(modal);
	}

	pageChanged(event) {
		this.autoLoad = true;
		this.load();
	}

    load() {
		if (!this.autoLoad) {
			return;
		}

		this.getAll();
    }



	public save(contact, modal) {
		const $this = this;

        this._service.save(contact, $('input[type=file]')).subscribe(
			result => {
				this.contact = result;
				if (!this.contactList) {
					this.contactList = [];
				}
				if (!contact.id) {
					this.contactList.push(result);
				} else {
                    const filter = this.contactList.filter(x => x.id === result.id);
					if (filter) {
						filter[0] = result;
					}
                }
				this.modalRef.close();
			},
			error => {
				this.errorMessage = error;
				this._toasterService.pop('error', 'Error', 'Error while saving');
				console.log(error);
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

	public openEdit(entity?: Contact, modal?: any) {
		this.contact = entity || new Contact();

		this.openModal(this.contactModal);
	}


	public remove(contact: Contact, index: number) {
		const msg = this.translate.instant('CONTACT.GRID.CONFIRM_DELETE');
		if (confirm(msg)) {
			this._service.remove(contact).subscribe(
				result => {
					this.contactList.splice(index,1);
				},
				error => {
					this.errorMessage = error;
				}
			);
		}
    }
}
