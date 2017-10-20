//models imports/////////////////////////////////
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard, AuthService } from '../auth/auth';
import { IndexComponent } from './_layout/index/index.component';
import { AdminLayoutModule } from './_layout/adminLayoutModule';
import { SharedModule } from '../shared/shared.module';
import { CombosModule } from '../combos/combos.module';
import { Config } from '../config';

import { ContactEdit } from './_generated/Contact/Edit';
import { ContactIndex } from './_generated/Contact/Index';
import { LanguageEdit } from './_generated/Language/Edit';
import { LanguageIndex } from './_generated/Language/Index';

@NgModule({
	declarations: [
		ContactEdit,
		ContactIndex,
		LanguageEdit,
		LanguageIndex,
	
	],
    imports: [
		SharedModule,
		CombosModule,
		AdminLayoutModule,
        RouterModule.forChild([
			{
			path: 'admin', component: IndexComponent, canActivate: [CanActivateViaAuthGuard],
				children:[
					{ path: 'contact', component: ContactIndex, canActivate: [CanActivateViaAuthGuard]},
					{ path: 'contact/:id', component: ContactEdit, canActivate: [CanActivateViaAuthGuard]},
					{ path: 'contact/new', component: ContactEdit, canActivate: [CanActivateViaAuthGuard] },
					{ path: 'language', component: LanguageIndex, canActivate: [CanActivateViaAuthGuard]},
					{ path: 'language/:id', component: LanguageEdit, canActivate: [CanActivateViaAuthGuard]},
					{ path: 'language/new', component: LanguageEdit, canActivate: [CanActivateViaAuthGuard] },
                    { path: '', redirectTo: 'admin', pathMatch: 'full' },
                ]
            }
        ])
    ],
    exports: [
        AdminLayoutModule,
        SharedModule,
		ContactEdit,
		ContactIndex,
		LanguageEdit,
		LanguageIndex,
    ]
})
export class GeneratedAdminModule {

}
