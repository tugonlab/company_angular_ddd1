import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [HomeComponent]

})
export class PagesModule { }
