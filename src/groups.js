export class Groups {
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  jump(h) {
    document.getElementById(h).scrollIntoView();
  }
}