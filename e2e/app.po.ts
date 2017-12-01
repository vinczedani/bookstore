import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route: string = '/') {
    return browser.get(route);
  }
}
