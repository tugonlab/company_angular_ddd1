import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { LayoutModule } from '../layout/layout.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs/Observable';
import { TrainingComponent } from './training/training.component';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PagesRoutingModule,
    LayoutModule,
    TranslateModule.forChild({

      loader: {
        provide: TranslateLoader,
        useFactory: (translateFactory),
        deps: [HttpClient],
      },
      isolate: true
    }),
  ],
  exports: [
    SharedModule,
    PagesRoutingModule
    
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class PagesModule {
  constructor(translate: TranslateService) {
    translate.use(translate.currentLang);
  }
}
export function translateFactory(http: HttpClient) {

  return new TranslateHttpLoader(http, './assets/i18n/pages/', '.json');
}

