import 'url-search-params-polyfill';
import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';

@inject(App)
export class MountainItineraries {
  constructor(app) { this.app = app; }
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  attached() {
    if (document.location.search.includes('itinerary=')) {
      const sp = new URLSearchParams(window.location.search);
      const location = sp.get('itinerary');
      document.getElementById(location).scrollIntoView();
    } else document.getElementById('top').scrollIntoView();
  }
}
