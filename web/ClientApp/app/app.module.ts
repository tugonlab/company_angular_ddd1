import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Config } from './config';
import { HttpService, BaseService } from './services/services';
import { CanActivateViaAuthGuard, AuthModule, LoginCallBackComponent, AuthService } from './auth/auth';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from "./services/services.module";
import { PagesModule } from './pages/pages.module';
//import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        ServicesModule,
        PagesModule,
        //AdminModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '', loadChildren: './pages/pages.module#PagesModule' },
            { path: '', loadChildren: './admin/admin.module#AdminModule' }

        ]),
        AuthModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: translateFactory,//(http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
            deps: [Http]
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}

export function translateFactory(http: Http) { return new TranslateStaticLoader(http, 'assets/i18n', '.json') }
