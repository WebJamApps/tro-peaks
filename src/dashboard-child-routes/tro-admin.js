import {
  ValidationControllerFactory, ValidationRules, Validator, validateTrigger
} from 'aurelia-validation';
import { inject } from 'aurelia-framework';
import { json } from 'aurelia-fetch-client';
import { App } from '../app';
import { FormValidator } from '../classes/FormValidator';

const utils = require('../commons/utils');
@inject(App, ValidationControllerFactory, Validator)
export class ClcAdmin {
  constructor(app, controllerFactory, validator) {
    this.app = app;
    this.utils = utils;
    this.newBook = {
      title: '',
      type: '',
      url: '',
      access: 'CLC'
    };
    this.validator = new FormValidator(validator, results => this.updateCanSubmit(results)); // if the form is valid then set to true.
    this.controller = controllerFactory.createForCurrentScope(this.validator);
    this.controller.validateTrigger = validateTrigger.changeOrBlur;
    this.canSubmit = false; // the button on the form
    this.validType = false;
    this.existingBooks = [];
    this.existingPics = [];
    this.titleSelected = '';
    this.picTitleSelected = '';
    this.showDeleteButton = false;
    this.showDeletePicButton = false;
    this.troHomePageContent = { title: '', comments: '', type: 'troHomePageContent' };
    this.newTestimonial = { title: '', comments: '', type: 'troTestimonials' };
    this.newPic = { title: '', url: '', type: 'troHomePics' };
    this.errorMessage = '';
  }

  get widescreenPage() { return document.documentElement.clientWidth > 900; }
  async activate() {
    this.app.dashboardTitle = 'Admin';
    const uid = this.app.auth.getTokenPayload().sub;
    this.user = await this.app.appState.getUser(uid);
    this.app.role = this.user.userType;
    let res, pics;
    try {
      res = await this.app.httpClient.fetch('/book?type=troTestimonials');
      if (res !== null && res !== undefined) this.existingBooks = await res.json();
      pics = await this.app.httpClient.fetch('/book?type=troHomePics');
      if (pics !== null && pics !== undefined) this.existingPics = await pics.json();
    } catch (e) { return sessionStorage.setItem('fetchBookError', `${e.message}`); }
    return Promise.resolve(true);
  }
  async changeHomePage() {
    this.app.httpClient.fetch('/book/one?type=troHomePageContent', {
      method: 'put',
      body: json(this.troHomePageContent)
    })
      .then(() => {
        this.app.router.navigate('/?reload=true');
      });
  }
  async addTestimonial() {
    if (this.newTestimonial.title === '') this.newTestimonial.title = 'Anonymous';
    this.app.httpClient.fetch('/book', {
      method: 'post',
      body: json(this.newTestimonial)
    })
      .then(() => {
        this.app.router.navigate('/testimonials?reload=true');
      });
  }
  showDelete() {
    this.showDeleteButton = true;
    if (this.titleSelected === '') this.showDeleteButton = false;
  }
  showDeletePic() {
    this.showDeletePicButton = true;
    if (this.picTitleSelected === '') this.showDeletePicButton = false;
  }
  deleteBook() {
    const selectBookTitle = document.getElementById('selectBookTitle');
    const id = selectBookTitle.options[selectBookTitle.selectedIndex].value;
    return this.utils.deleteBookById(id, this, 'testimonials');
  }
  deletePic() {
    const selectPicTitle = document.getElementById('selectPicTitle');
    const id = selectPicTitle.options[selectPicTitle.selectedIndex].value;
    return this.utils.deleteBookById(id, this, '');
  }
  async addPic() {
    this.errorMessage = '';
    if (this.newPic.title === '' || this.newPic.url === '') {
      this.errorMessage = 'Your picture must include a title and a url';
      return Promise.resolve(false);
    }
    return this.app.httpClient.fetch('/book', {
      method: 'post',
      body: json(this.newPic)
    })
      .then(() => {
        this.app.router.navigate('/?reload=true');
      });
  }
}
