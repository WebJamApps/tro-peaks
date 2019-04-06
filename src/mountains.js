import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';

@inject(App)
export class Mountains {
  constructor(app) {
    this.app = app;
    this.killaSection = true;
    this.meruSection = false;
    this.oldSection = false;
    this.equipSection = true;
  }
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  attached() { document.getElementById('top').scrollIntoView(); }
  showSection(name) {
    const mLink = document.getElementsByClassName('mLink');
    const kLink = document.getElementsByClassName('kLink');
    const oLink = document.getElementsByClassName('oLink');
    this[name] = true;
    if (name === 'oldSection') {
    // background-color:#760908;color:white;text-decoration:none
      oLink[0].style.backgroundColor = '#760908';
      oLink[0].style.color = 'white';
      oLink[0].style.textDecoration = 'none';
      this.meruSection = false;
      this.killaSection = false;
      this.equipSection = false;
    }
    if (name === 'killaSection') {
      this.meruSection = false;
      this.equipSection = true;
    }
    if (name === 'meruSection') {
      this.killaSection = false;
      this.equipSection = true;
    }
  }
}
