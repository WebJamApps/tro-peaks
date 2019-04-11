import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';

@inject(App)
export class Beaches {
  constructor(app) { this.app = app; }
  slideshowImages = [
    { src: 'https://dl.dropboxusercontent.com/s/4misf2tflgxe966/Bagamoyo.jpg?dl=0' }, // eslint-disable-next-line max-len
    { src: 'https://dl.dropboxusercontent.com/s/v32iimf6nu760yc/Dar-coast.jpg?dl=0' },
    { src: 'https://dl.dropboxusercontent.com/s/x60bf8opegt1t5l/pangani.jpg?dl=0' }, // eslint-disable-line max-len
    { src: 'https://dl.dropboxusercontent.com/s/iy55t7xj05zwi2n/zanzibar.jpg?dl=0' } // eslint-disable-line max-len
  ];
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  attached() { document.getElementById('top').scrollIntoView(); }
}
