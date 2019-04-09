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
      oLink[0].style.backgroundColor = '#760908';
      oLink[0].style.color = 'white';
      oLink[0].style.textDecoration = 'none';
      if (!this.widescreenPage) {
        oLink[1].style.backgroundColor = '#760908';
        oLink[1].style.color = 'white';
        oLink[1].style.textDecoration = 'none';
      }
      this.meruSection = false;
      this.killaSection = false;
      this.equipSection = false;
      this.resetLinks(['kLink', 'mLink']);
    }
    if (name === 'killaSection') {
      kLink[0].style.backgroundColor = '#760908';
      kLink[0].style.color = 'white';
      kLink[0].style.textDecoration = 'none';
      if (!this.widescreenPage) {
        kLink[1].style.backgroundColor = '#760908';
        kLink[1].style.color = 'white';
        kLink[1].style.textDecoration = 'none';
      }
      this.meruSection = false;
      this.equipSection = true;
      this.oldSection = false;
      this.resetLinks(['oLink', 'mLink']);
    }
    if (name === 'meruSection') {
      mLink[0].style.backgroundColor = '#760908';
      mLink[0].style.color = 'white';
      mLink[0].style.textDecoration = 'none';
      if (!this.widescreenPage) {
        mLink[1].style.backgroundColor = '#760908';
        mLink[1].style.color = 'white';
        mLink[1].style.textDecoration = 'none';
      }
      this.killaSection = false;
      this.equipSection = true;
      this.oldSection = false;
      this.resetLinks(['kLink', 'oLink']);
    }
  }
  resetLinks(nameArr) {
    let elClass;
    for (let i = 0; i < nameArr.length; i += 1) {
      elClass = document.getElementsByClassName(nameArr[i]);
      elClass[0].style.backgroundColor = 'white';
      elClass[0].style.color = '#007bff';
      elClass[0].style.textDecoration = 'underline';
      if (!this.widescreenPage) {
        elClass[1].style.backgroundColor = 'white';
        elClass[1].style.color = '#007bff';
        elClass[1].style.textDecoration = 'underline';
      }
    }
  }
}
