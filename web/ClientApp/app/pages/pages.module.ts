import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    SharedModule,
    PagesRoutingModule
  ]

})
export class PagesModule { }
