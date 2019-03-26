import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';

@inject(App)
export class Testimonials {
  constructor(app) { this.app = app; }
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  // activate() { return this.app.commonUtils.pageSetup(this, 'youth', sessionStorage); }
  attached() { document.getElementById('top').scrollIntoView(); }
}
