import Route from '@ember/routing/route';

export default class PromoRoute extends Route {
  model() {
    return this.modelFor('Ex2');
  }
}
