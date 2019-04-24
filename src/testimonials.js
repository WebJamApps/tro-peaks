import {
  inject
} from 'aurelia-framework';
import {
  App
} from './app';

@inject(App)
export class Testimonials {
  constructor(app) {
    this.app = app;
    this.testimonials = [];
  }
  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  async activate() {
    let res;
    try {
      res = await this.app.httpClient.fetch('/book?type=troTestimonials');
      if (res !== null && res !== undefined) this.testimonials = await res.json();
    } catch (e) { return sessionStorage.setItem('testimonialsError', `${e.message}`); }

    if (this.testimonials.length > 0) {
      return this.buildTestimonials();
    }
    return null;
  }
  attached() {
    document.getElementById('top').scrollIntoView();
    this.buildTestimonials();
  }
  buildTestimonials() {
    this.testimonials = this.testimonials.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const t = document.getElementsByClassName('testimonials')[0];
    let content = '';
    if (t !== null && t !== undefined) {
      for (let i = 0; i < this.testimonials.length; i += 1) {
        content = `${content}<h4>${this.testimonials[i].title}</h4><p>${this.testimonials[i].comments}</p>`;
      }
      t.innerHTML = content;
    }
  }
}
