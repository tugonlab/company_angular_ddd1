import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (module['hot']) {
   
    console.log("dev");
    module['hot'].accept();
    module['hot'].dispose(() => {
        var rootElemTagName: string = "app-root";
        const oldRootElem = document.querySelector(rootElemTagName);
        const newRootElem = document.createElement(rootElemTagName);
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        oldRootElem.remove();
        platformBrowserDynamic().destroy();
    });

}
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
