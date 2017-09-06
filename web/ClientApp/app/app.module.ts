import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component'
//import { GeneratedAdminModule } from './admin/generated';

import { HttpService, BaseService } from './services/services';
import { CanActivateViaAuthGuard, AuthModule, LoginCallBackComponent, AuthService } from './auth/auth';
import { Config } from './config';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { ServiceGeneratedModule } from './services/generated/servicesGeneratedModule';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from "./pages/pages.module";


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        //HomeComponent,
    ],
    imports: [
        FormsModule,
        SharedModule,
        ServiceGeneratedModule,
        //GeneratedAdminModule,
        AuthModule,
        PagesModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: translateFactory,//(http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
            deps: [Http]
        }),
        RouterModule.forRoot([
            {                                          // removed square bracket
                path: '',
                redirectTo: 'callback',
                pathMatch: 'full'
            },
            { path: 'callback', component: LoginCallBackComponent },
        ])
    ]
})
export class AppModule {

}

export function translateFactory(http: Http) { return new TranslateStaticLoader(http, 'assets/i18n', '.json') }
