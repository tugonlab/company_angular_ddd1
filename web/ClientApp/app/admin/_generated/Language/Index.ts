import { Component, NgModule, Input, Output, OnInit, ViewChild, EventEmitter, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LanguageService } from '../../../services/generated/LanguageService';
import { Language } from '../../../models/Language';
import { LanguageEdit } from './Edit';
import { PagingModel } from '../../../models/PagingModel';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from 'ng2-translate';
import { ToasterService } from 'angular2-toaster';

///child

declare var $:any;

@Component({
    
	selector: 'list-Language',
    templateUrl: './Index.html',
    providers: [
		LanguageService
	]
})
export class LanguageIndex implements OnInit, OnChanges {

	page: PagingModel<Language>;
	errorMessage: string;
    language: Language;
	languageList: Language[];
	@Input()
	autoLoad=true;
	@ViewChild('languageModal') 
	public languageModal:TemplateRef<any>;
	private modalRef: NgbModalRef;
	
	constructor( private _service: LanguageService, public translate: TranslateService, private _modalService: NgbModal, private _toasterService: ToasterService	) {
		this.page = _service.page;
		this.language = new Language();
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



	public save(language, modal) {
		var $this = this;

        this._service.save(language, $("input[type=file]")).subscribe(
			result => {
				this.language = result;
				if(!this.languageList)
					this.languageList = [];
				if(!language.id)
					this.languageList.push(result);
				else {
                    var f = this.languageList.filter(x => x.id == result.id);
					if(f)
						f[0] = result;
                }
				this.modalRef.close();
			},
			error => {
				this.errorMessage = error;
				this._toasterService.pop('error', 'Error', 'Error while saving');
				console.log(error)
			}
		);
    }


    public getAll() {
		this._service.getPage(this.page)
		.subscribe(
			result => {
				this.page.totalCount = result.totalCount; 
				this.languageList = result.list;
			},
			error => {
				this.errorMessage = error;
			}
		);
    }

	public openEdit(entity?: Language, modal?:any ){
		this.language = entity || new Language();
		//this._service.emit("onOpenEdit",entity);
		if(entity){
		}
		this.openModal(this.languageModal);
	}


	public remove(language:Language, index:number) {
		var msg = this.translate.instant('LANGUAGE.GRID.CONFIRM_DELETE');
		if(confirm(msg)){
			this._service.remove(language).subscribe(
				result => {
					//this.language = result;
					this.languageList.splice(index,1)
				},
				error => {
					this.errorMessage = error;
				}
			);
		}
    }
}
