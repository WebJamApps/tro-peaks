import { Testimonials } from '../../src/testimonials';

describe('the Testimonials Module', () => {
  let testimonials;
  beforeEach((done) => {
    testimonials = new Testimonials();
    done();
  });

  it('checks that widescreen is boolean', (done) => {
    expect(typeof testimonials.widescreenPage).toBe('boolean');
    done();
  });
});
