//models imports/////////////////////////////////
import { NgModule } from '@angular/core';

import { ContactService } from './ContactService';
import { LanguageService } from './LanguageService';

@NgModule({
	//provides
	providers: [
		ContactService,
		LanguageService,
	
	]
})
export class ServiceGeneratedModule {

}
