import { Component, NgModule, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LanguageService } from '../../../services/generated/LanguageService';
import { Language } from '../../../models/Language';

@Component({
	selector:'app-form-language',
    templateUrl: './Edit.html',
    providers: [LanguageService]
})
export class LanguageEditComponent implements OnInit {

    constructor(private _service: LanguageService) { }
	@Input() obj?: any;
	@Input() modal?: any;

	@Output() onSave?: EventEmitter<Language> = new EventEmitter();

	@Input()
    language: Language;

    ngOnInit() {
        this.language = this.language || new Language();
    }

	public save(language) {
		this.onSave.emit(language);
    }

	public closeEdit() {
		this.modal.hide();
	}

}
