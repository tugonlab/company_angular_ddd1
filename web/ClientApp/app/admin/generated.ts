//models imports/////////////////////////////////
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard, AuthService } from '../auth/auth';
import { IndexComponent } from './_layout/index/index.component';
import { AdminLayoutModule } from './_layout/adminLayoutModule'
import { SharedModule } from '../shared/shared.module';
import { CombosModule } from '../combos/combos.module';
import { Config } from '../config';

import { ContactEdit } from './_generated/Contact/Edit';
import { ContactIndex } from './_generated/Contact/Index';

@NgModule({
	declarations: [
		ContactEdit,
		ContactIndex,

	],
	imports: [
		SharedModule,
		CombosModule,
		AdminLayoutModule,
		RouterModule.forChild(
			[
				{
					path: 'admin', component: IndexComponent, canActivate: [CanActivateViaAuthGuard],
					children: [
						{ path: 'contact', component: ContactIndex, canActivate: [CanActivateViaAuthGuard] },
						{ path: 'contact/:id', component: ContactEdit, canActivate: [CanActivateViaAuthGuard] },
						{ path: 'contact/new', component: ContactEdit, canActivate: [CanActivateViaAuthGuard] },
					]
				}
			])
	],
	exports: [
		AdminLayoutModule,
		SharedModule,
		ContactEdit,
		ContactIndex,
	]
})
export class GeneratedAdminModule {

}
