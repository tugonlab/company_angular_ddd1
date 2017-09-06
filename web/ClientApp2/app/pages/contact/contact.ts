import { Component, NgModule, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ContactCustomService } from '../../services/custom/Contact';
import { Contact } from '../../models/Contact';
import { ToasterContainerComponent, ToasterService, Toast, BodyOutputType } from 'angular2-toaster';
import { NgbDateParserFormatter, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap/';
import { formatter } from '../../shared/util/myNgbDatePickerFormat';
declare var google: any;
@Component({
    
    styles: [`
       .sebm-google-map-container {
         height: 300px;
          width:100%;
       }
    `],
    templateUrl: './contact.html',
    providers: [ContactCustomService]
})

export class ContactComponent implements OnInit {

    errorMessage: string;
    name: string;
    lat: number = -23.585697;
    lng: number = -46.569122;
    zoom: number = 18;
    @ViewChild('content') modalRef: TemplateRef<any>;

    constructor(
        private _service: ContactCustomService,
        private _toasterService: ToasterService,
        private _modalService: NgbModal
    ) {

        this.load();
    }

    load() {

    }

    map() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }


    contact: Contact;

    ngOnInit() {
        this.contact = new Contact();
    }

    open() {
        const modalRef = this._modalService.open(this.modalRef);
        modalRef.componentInstance.name = 'contentModal';
    }

    validate(contact: Contact) {
        if (!contact.name) {
            this.errorMessage = "Preencha o campo nome";
            return false;
        }

        if (!contact.email) {
            this.errorMessage = "Preencha o campo email";
            return false;
        }

        if (!contact.message) {
            this.errorMessage = "Preencha o campo mensagem";
            return false;
        }


        return true;
    }

    public SendEmail(contact: Contact) {
        if (this.validate(contact)) {
            this._service.sendEmail(contact).subscribe(result => {
                this.name = contact.name;
                this.contact = new Contact();
                this.open()
            },
                error => {
                    this.errorMessage = "Problema no envio da mensagem, tente novamente";
                    this._toasterService.pop("error", "Erro", this.errorMessage);
                });
        } else {
            this._toasterService.pop("error", "Erro", this.errorMessage);
        }
    }
}


