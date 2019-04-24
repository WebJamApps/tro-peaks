import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';

@inject(App)
export class DayTrips {
  constructor(app) { this.app = app; }
  slideshowImages = [
    { src: 'https://dl.dropboxusercontent.com/s/nhkzwrr9546neei/Kinukamori-waterfall.jpg?dl=0' }, // eslint-disable-next-line max-len
    { src: 'https://dl.dropboxusercontent.com/s/72yyvdvta1xsdya/chala.jpg?dl=0' },
    { src: 'https://dl.dropboxusercontent.com/s/q3qw2lgbg3bgokz/coffeetour.jpg?dl=0' }, // eslint-disable-line max-len
    { src: 'https://dl.dropboxusercontent.com/s/axxl3kw857v4ngd/msandaka.jpg?dl=0' }, // eslint-disable-line max-len
    { src: 'https://dl.dropboxusercontent.com/s/d46y3e72vs4laz1/school.jpg?dl=0' } // eslint-disable-line max-len
  ];
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  attached() { document.getElementById('top').scrollIntoView(); }
}
