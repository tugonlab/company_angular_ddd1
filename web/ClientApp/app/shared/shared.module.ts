import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpService, BaseService } from '../services/services';
import { Config } from '../config';
import { MyNgbDateParserFormatter } from './util/myNgbDatePickerFormat';

import { imgResizeComponent } from './imgResize/imgResizeComponent';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AgmCoreModule } from '@agm/core';

import { BreadcrumbsComponent } from '../directives/breadcrumb.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from 'angular2-progressbar';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [


        imgResizeComponent,
        BreadcrumbsComponent,

    ],
    providers: [
        Config,
        HttpService,
        BaseService,
        ToasterService,
    ],
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBwO1dtoYSoiT4TmgNE4983QBOge-Q3II0'
        }),
        ToasterModule,
        //ProgressBarModule,
        DirectivesModule,
        PipesModule,
    ],
    exports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TranslateModule,        
        //ProgressBarModule,
        DirectivesModule,
        PipesModule,
        imgResizeComponent,
        ToasterModule,
        AgmCoreModule,
        BreadcrumbsComponent,

    ],

})
export class SharedModule {

}
