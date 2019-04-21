import { inject } from 'aurelia-framework';
import { App } from './app';
import { alwaysTop } from './commons/utils';

@inject(App)
export class Booking {
  constructor(app) { this.app = app; }
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  attached() { alwaysTop(); }
}
