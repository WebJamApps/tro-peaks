import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';
@inject(App)
export class Home {
  constructor(app) {
    this.app = app;
    this.top = null;
    this.homeContent = { title: '', comments: '' };
    this.slideshowImages = [];
  }

  async activate() {
    let res, pics;
    try {
      res = await this.app.httpClient.fetch('/book/one?type=troHomePageContent');
      if (res !== null && res !== undefined) this.homeContent = await res.json();
      pics = await this.app.httpClient.fetch('/book?type=troHomePics');
      if (pics !== null && pics !== undefined) {
        this.slideshowImages = await pics.json();
        for (let i = 0; i < this.slideshowImages.length; i += 1) this.slideshowImages[i].src = this.slideshowImages[i].url;
      }
    } catch (e) { return sessionStorage.setItem('homeError', `${e.message}`); }
    return true;
  }

  get widescreenHomepage() { return document.documentElement.clientWidth > 1200; }
}
