import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent, AboutComponent } from "./pages";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [

  {                                          // removed square bracket
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  { path: 'contact', component: ContactComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'quemsomos', component: AboutComponent },
  { path: '**', redirectTo: 'about' }
];

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [
    RouterModule,
    SharedModule,
    ContactComponent,
    AboutComponent,]
})
export class PagesRoutingModule { }
