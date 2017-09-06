import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { HttpService, BaseService } from '../services/services';
import { inRoleDirective } from '../directives/inRoleDirective';
import { replaceDirective } from '../directives/replaceDirective';
import { scrollTopDirective } from '../directives/scrollTopDirective';
import { claimDirective } from '../directives/claimDirective';
import { Config } from '../config';
import { MyNgbDateParserFormatter } from './util/myNgbDatePickerFormat';

import { imgResizeComponent } from './imgResize/imgResizeComponent';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AsideToggleDirective } from '../directives/aside.directive';
import { BreadcrumbsComponent } from '../directives/breadcrumb.component';
import { NAV_DROPDOWN_DIRECTIVES } from '../directives/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../directives/sidebar.directive';

@NgModule({
    declarations: [
        inRoleDirective,
        replaceDirective,
        claimDirective,
        scrollTopDirective,
        imgResizeComponent,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        NAV_DROPDOWN_DIRECTIVES,
        AsideToggleDirective,
    ],
    providers: [
        Config,
        HttpService,
        BaseService,
        ToasterService,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBwO1dtoYSoiT4TmgNE4983QBOge-Q3II0'
        }),
        ToasterModule
    ],
    exports: [
        BrowserModule,
        RouterModule,
        NgbModule,
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,        
        inRoleDirective,
        replaceDirective,
        claimDirective,
        scrollTopDirective,
        imgResizeComponent,
        ToasterModule,
        AgmCoreModule,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        NAV_DROPDOWN_DIRECTIVES,
        AsideToggleDirective,
    ],

})
export class SharedModule {

}
