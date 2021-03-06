import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FooterAdminComponent } from './footer/footer';
import { HeaderAdminComponent } from './header/header';
import { NavMenuAdminComponent } from './navmenu/navmenu';
import { NavMenuAdminGeneratedComponent } from './navmenu/navmenuGenerated';
import { NotificationAdminComponent } from './notification/notification';
import { SliderAdminComponent } from './slider/slider';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        FooterAdminComponent,
        HeaderAdminComponent,
        NavMenuAdminComponent,
        NavMenuAdminGeneratedComponent,
        NotificationAdminComponent,
        SliderAdminComponent,
        IndexComponent
    ],
    exports: [
        SharedModule,
        FooterAdminComponent,
        HeaderAdminComponent,
        NavMenuAdminComponent,
        NavMenuAdminGeneratedComponent,
        NotificationAdminComponent,
        SliderAdminComponent,
        IndexComponent
    ]
})
export class AdminLayoutModule{

}


