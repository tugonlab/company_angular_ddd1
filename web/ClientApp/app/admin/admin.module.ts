import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
//import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
//import { Http } from '@angular/http';
import { GeneratedAdminModule } from './generated';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    GeneratedAdminModule,
    // TranslateModule.forRoot({
    //   provide: TranslateLoader,
    //   useFactory: translateFactory,//(http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    //   deps: [Http]
    // }),
  ],
})
export class AdminModule { }
//export function translateFactory(http: Http) { return new TranslateStaticLoader(http, 'assets/i18n', '.json') }