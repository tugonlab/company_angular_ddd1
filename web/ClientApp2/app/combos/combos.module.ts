
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ComboContactComponent } from './combo.contact';

@NgModule({
    declarations: [
        ComboContactComponent,
    ],
	imports:[
		SharedModule,
	],
    exports: [
        ComboContactComponent,
    ]


})
export class CombosModule {

}


