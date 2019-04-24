import { PLATFORM } from 'aurelia-pal';

export class DashboardRouter {
  heading = 'Dashboard Router';

  configureRouter(config, router) {
    config.map([
      { route: '', name: 'dashboard', moduleId: PLATFORM.moduleName('./dashboard'), nav: false, title: 'Dashboard', auth: true },
      {
        route: 'tro-admin',
        name: 'tro-admin',
        moduleId: PLATFORM.moduleName('./dashboard-child-routes/tro-admin'),
        nav:
        false,
        title: 'Admin Dashboard',
        auth: true
      }
    ]);
    this.router = router;
  }
}
