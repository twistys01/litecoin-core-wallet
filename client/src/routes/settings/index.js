import {Router} from 'aurelia-router';

export class Index {
  router;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './routes/home', nav: true, title: 'Home' },
      { route: 'about', name: 'about', moduleId: './routes/about', nav: true, title: 'About' },
      { route: 'client-information', name: 'client-information', moduleId: './routes/client-information', nav: true, title: 'Client information' },
      { route: 'peers', name: 'peers', moduleId: './routes/peer-information', nav: true, title: 'Peers' }
    ]);

    this.router = router;
  }
}
