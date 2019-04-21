export class Staff {
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  jump(h) {
    document.getElementById(h).scrollIntoView();
  }
  attached() { document.getElementsByClassName('page-content')[0].scrollIntoView(); }
}
