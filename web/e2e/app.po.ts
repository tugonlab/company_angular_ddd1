import { browser, by, element } from 'protractor';

export class TemplatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app h1')).getText();
  }
}
