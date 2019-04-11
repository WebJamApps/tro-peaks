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
  }
  slideshowImages = [
    { src: 'https://dl.dropboxusercontent.com/s/zddcbz3j280is5a/kilimanjaro-banner.png?dl=0' }, // eslint-disable-next-line max-len
    { src: 'https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/44395295_1169322313233417_414612477486039040_n.jpg?_nc_cat=107&_nc_ht=scontent.fric1-1.fna&oh=89a19d5933955bd09534213b45c44268&oe=5D4FE32F' },
    { src: 'https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/44324945_1169322133233435_4659363526962315264_n.jpg?_nc_cat=108&_nc_ht=scontent.fric1-1.fna&oh=afb572f74e162e7e11df3975c3ddc91a&oe=5D10C9E6' }, // eslint-disable-line max-len
    { src: 'https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/44884557_1174720516026930_1048680964705746944_n.jpg?_nc_cat=108&_nc_ht=scontent.fric1-1.fna&oh=deec5d3dc1f2d02273a9460a7226d1c4&oe=5D0D7C1D' }, // eslint-disable-line max-len
    { src: 'https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/44445622_1169322223233426_939149123880222720_n.jpg?_nc_cat=102&_nc_ht=scontent.fric1-1.fna&oh=14c45c6896bc481d0a0897bfe9dfc259&oe=5D505745' }// eslint-disable-line max-len
  ];
  async activate() {
    let res;
    try {
      res = await this.app.httpClient.fetch('/book/one?type=troHomePageContent');
      if (res !== null && res !== undefined) this.homeContent = await res.json();
    } catch (e) { return sessionStorage.setItem('homeError', `${e.message}`); }
    return true;
  }

  get widescreenHomepage() { return document.documentElement.clientWidth > 1200; }
}
