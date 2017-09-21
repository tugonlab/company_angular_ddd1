
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ComboContactComponent } from './combo.contact';
import { ComboLanguageComponent } from './combo.language';

@NgModule({
    declarations: [
        ComboContactComponent,
        ComboLanguageComponent,
    ],
	imports:[
		SharedModule,
	],
    exports: [
        ComboContactComponent,
        ComboLanguageComponent,
    ]


})
export class CombosModule {

}


