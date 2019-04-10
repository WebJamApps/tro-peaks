import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';

@inject(App)
export class Safaris {
  constructor(app) {
    this.app = app;
    this.northSection = true;
    this.southSection = false;
    this.westSection = false;
    this.cultureSection = false;
  }
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  attached() { document.getElementById('top').scrollIntoView(); }
  showSection(name) {
    document.getElementById('topSection').scrollIntoView();
    const nLink = document.getElementsByClassName('nLink');
    const sLink = document.getElementsByClassName('sLink');
    const wLink = document.getElementsByClassName('wLink');
    const cLink = document.getElementsByClassName('cLink');
    this[name] = true;
    if (name === 'northSection') {
      nLink[0].style.backgroundColor = '#760908';
      nLink[0].style.color = 'white';
      nLink[0].style.textDecoration = 'none';
      if (!this.widescreenPage) {
        nLink[1].style.backgroundColor = '#760908';
        nLink[1].style.color = 'white';
        nLink[1].style.textDecoration = 'none';
      }
      this.southSection = false;
      this.westSection = false;
      this.cultureSection = false;
      this.resetLinks(['sLink', 'wLink', 'cLink']);
    }
    if (name === 'southSection') {
      sLink[0].style.backgroundColor = '#760908';
      sLink[0].style.color = 'white';
      sLink[0].style.textDecoration = 'none';
      if (!this.widescreenPage) {
        sLink[1].style.backgroundColor = '#760908';
        sLink[1].style.color = 'white';
        sLink[1].style.textDecoration = 'none';
      }
      this.northSection = false;
      this.westSection = false;
      this.cultureSection = false;
      this.resetLinks(['nLink', 'wLink', 'cLink']);
    }
    if (name === 'westSection') {
      wLink[0].style.backgroundColor = '#760908';
      wLink[0].style.color = 'white';
      wLink[0].style.textDecoration = 'none';
      if (!this.widescreenPage) {
        wLink[1].style.backgroundColor = '#760908';
        wLink[1].style.color = 'white';
        wLink[1].style.textDecoration = 'none';
      }
      this.northSection = false;
      this.southSection = false;
      this.cultureSection = false;
      this.resetLinks(['nLink', 'sLink', 'cLink']);
    }
    if (name === 'cultureSection') {
      cLink[0].style.backgroundColor = '#760908';
      cLink[0].style.color = 'white';
      cLink[0].style.textDecoration = 'none';
      if (!this.widescreenPage) {
        cLink[1].style.backgroundColor = '#760908';
        cLink[1].style.color = 'white';
        cLink[1].style.textDecoration = 'none';
      }
      this.northSection = false;
      this.southSection = false;
      this.westSection = false;
      this.resetLinks(['nLink', 'sLink', 'wLink']);
    }
  }
  resetLinks(nameArr) {
    let elClass, bgColor = 'white';
    if (this.widescreenPage) bgColor = '#e6eefe';
    for (let i = 0; i < nameArr.length; i += 1) {
      elClass = document.getElementsByClassName(nameArr[i]);
      elClass[0].style.backgroundColor = bgColor;
      elClass[0].style.color = '#007bff';
      elClass[0].style.textDecoration = 'underline';
      if (!this.widescreenPage) {
        elClass[1].style.backgroundColor = bgColor;
        elClass[1].style.color = '#007bff';
        elClass[1].style.textDecoration = 'underline';
      }
    }
  }
}
