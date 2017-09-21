import { Component, NgModule, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LanguageService } from '../../../services/generated/LanguageService';
import { Language } from '../../../models/Language';
import { TranslateService } from 'ng2-translate';

@Component({    
	selector:'form-Language',
    templateUrl: './Edit.html',
    providers: [LanguageService]
})
export class LanguageEdit implements OnInit {

    constructor(private _service: LanguageService, public translate: TranslateService) {
		
    }
	@Input() obj?:any;
	@Input() modal?:any;

	@Output() onSave?:EventEmitter<Language> = new EventEmitter();

	@Input()
    language: Language;

    ngOnInit() {
        this.language = this.language || new Language();
    }

	public save(language) {
		this.onSave.emit(language);
    }

	public closeEdit(){
		this.modal.hide();
	}

}
