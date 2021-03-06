import { PageObjectSkeleton } from './skeleton.po';

const config = require('../protractor.conf').config;


describe('tro-peaks.com', () => {
  // let poWelcome;
  let poSkeleton;

  beforeEach(async () => {
    poSkeleton = new PageObjectSkeleton();
    // poWelcome = new PageObjectWelcome();

    await browser.loadAndWaitForAureliaPage(`http://localhost:${config.port}`);
    await browser.driver.manage().window().maximize();
    // console.log('did I get here or fail before?');
    await poSkeleton.sleep(1000);
  });

  it('should load the page and display the initial page title', async () => {
    await expect(poSkeleton.getCurrentPageTitle()).toBe('Tro-Peaks Adventures');
  });

  it('should navigate to staff page', async () => {
    await poSkeleton.navigateTo('/staff');
    await expect(poSkeleton.getCurrentPageTitle()).toBe('Staff | Tro-Peaks Adventures');
  });

  // it('should navigate to beliefs page', async () => {
  //   await poSkeleton.navigateTo('/beliefs');
  //   await expect(poSkeleton.getCurrentPageTitle()).toBe('Our Lutheran Beliefs | College Lutheran Church');
  // });

  // it('should navigate to OHAF page', async () => {
  //   await poSkeleton.navigateTo('/ohaf');
  //   await expect(poSkeleton.getCurrentPageTitle()).toBe('OHAF | Web Jam LLC');
  // });

  // it('should navigate to SC2RS page', async () => {
  //   await poSkeleton.navigateTo('/sc2rs');
  //   await expect(poSkeleton.getCurrentPageTitle()).toBe('SC2RS | Web Jam LLC');
  // });

  // it('should navigate to Library page', async () => {
  //   await poSkeleton.navigateTo('/library');
  //   await expect(poSkeleton.getCurrentPageTitle()).toBe('Library | Web Jam LLC');
  // });
  //
  // it('should navigate to Login page', async () => {
  //   await poSkeleton.navigateTo('/login');
  //   await expect(poSkeleton.getCurrentPageTitle()).toBe('Login | Web Jam LLC');
  // });
});
