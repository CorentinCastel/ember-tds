import EmberRouter from '@ember/routing/router';
import config from 'td1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Abstractroute');
  this.route('board');
  this.route('logout');
  this.route('sections', function() {
    this.route('add');
    this.route('delete', {path:'delete/:section_id'});
    this.route('edit', {path:'edit/:section_id'}, function() {
      this.route('edit', {path:'edit/:product_id'});
      this.route('delete', {path:'delete/:product_id'});
      this.route('addProduct', {path: 'addProduct/:section_id'});
    });
    this.route('addProduct');
  });
  this.route('myOrders', function() {
    this.route('prepare', {path:'prepare/:order_id'}, function() {
      this.route('cancel');
      this.route('prepared');
    });
  });
});
