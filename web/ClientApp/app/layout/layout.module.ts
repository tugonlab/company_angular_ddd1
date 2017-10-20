import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forChild({

      loader: {
        provide: TranslateLoader,
        useFactory: (translateFactory),
        deps: [HttpClient],
      },
      isolate: true
    }),
  ],
  declarations: [IndexComponent, FooterComponent, HeaderComponent],
  exports: [IndexComponent, FooterComponent, HeaderComponent]
})
export class LayoutModule {
  constructor(translate: TranslateService) {
    translate.use(translate.currentLang);
  }
}
export function translateFactory(http: HttpClient) {

  return new TranslateHttpLoader(http, './assets/i18n/layout/', '.json');
}
