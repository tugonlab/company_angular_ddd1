import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceGeneratedModule } from "./generated/servicesGeneratedModule";
import { ContactCustomService } from "./custom/Contact";

@NgModule({
  imports: [
    ServiceGeneratedModule
  ],
  exports: [
    ServiceGeneratedModule
  ],
  declarations: [],
  providers: [
    ContactCustomService
  ]
})
export class ServicesModule { }
