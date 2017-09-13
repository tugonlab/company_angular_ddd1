import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { ContactComponent, AboutComponent, HomeComponent } from "./pages";
import { SharedModule } from "../shared/shared.module";

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'quemsomos', component: AboutComponent }

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

function htmlFiles(url: UrlSegment[]) {
  return url.length === 1 && url[0].path.endsWith('.html') ? ({ consumed: url }) : null;
}


