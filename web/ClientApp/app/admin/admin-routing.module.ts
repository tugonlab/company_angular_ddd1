import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratedAdminModule } from './generated';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes),GeneratedAdminModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
