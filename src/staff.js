import { alwaysTop } from './commons/utils';

export class Staff {
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  jump(h) {
    document.getElementById(h).scrollIntoView();
  }
  attached() { alwaysTop(); }
}
