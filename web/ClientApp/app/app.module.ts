import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Config } from './config';
import { HttpService, BaseService } from './services/services';
import { CanActivateViaAuthGuard, AuthModule, LoginCallBackComponent, AuthService } from './auth/auth';

import { IAppState, rootReducer, INITIAL_STATE } from "./store/store";
import { Resume } from "./models/Resume";
import { ReducerService } from "./store/reducer/reducer.service";

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        SharedModule,
        NgReduxModule,
        ServicesModule,
        ComponentsModule,
        PagesModule,
        AdminModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '', loadChildren: './pages/pages.module#PagesModule' },
            { path: '', loadChildren: './admin/admin.module#AdminModule' }

        ]),
        AuthModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
            provide: TranslateLoader,
                useFactory: (translateFactory),
                deps: [HttpClient]
            },
            isolate: true
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(private _reducerService: ReducerService<Resume>) {
        _reducerService.configureStore();
    }

}

export function translateFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
