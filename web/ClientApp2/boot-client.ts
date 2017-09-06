import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "angular2-toaster/toaster.css"; 

console.log("env", environment);
if (module['hot']) {
   
    console.log("dev");
    module['hot'].accept();
    module['hot'].dispose(() => {
        var rootElemTagName: string = "app";
        const oldRootElem = document.querySelector(rootElemTagName);
        const newRootElem = document.createElement(rootElemTagName);
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        oldRootElem.remove();
        platformBrowserDynamic().destroy();
    });

} else {
    console.log("prodwwww");
    enableProdMode();

}
platformBrowserDynamic().bootstrapModule(AppModule);


