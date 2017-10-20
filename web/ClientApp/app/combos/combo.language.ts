import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../services/generated/LanguageService';
import { Language } from '../models/Language';

@Component({
    
    selector: 'app-combo-language',
    template: `
	<select [ngModel]=model (ngModelChange)="updateData($event)"  name="language" class="{{cssClass}}" >
		<option *ngFor="let language of languageList" [value]="language.id">{{language.name}}</option>
	</select>`,
	providers: [LanguageService]
})
export class ComboLanguageComponent implements OnInit{
	errorMessage: string;
    language: Language;
	languageList: Language[];

	@Input() cssClass?:string;

	@Input() model: any;
	
	@Output() modelChange: any = new EventEmitter();   

	constructor(private _service: LanguageService) {
 
    }

	updateData(event){
		this.model = event;
		this.modelChange.emit(event);
	}

    ngOnInit() {
        this.language = new Language();
		this.getAll();
    }

    public getAll() {
		this._service.getAll()
		.subscribe(
			result => {
				this.languageList = result;
			},
			error => {
				this.errorMessage = error;
			}
		);
    }

}
