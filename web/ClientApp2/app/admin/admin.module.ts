import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GeneratedAdminModule } from "./generated";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    GeneratedAdminModule
  ],
  exports: [AdminRoutingModule, GeneratedAdminModule],
})
export class AdminModule { }
