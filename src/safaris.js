import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';

@inject(App)
export class Safaris {
  constructor(app) { this.app = app; }
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  attached() { document.getElementById('top').scrollIntoView(); }
}
