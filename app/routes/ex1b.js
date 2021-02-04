import Route from '@ember/routing/route';

export default class Ex1bRoute extends Route {
  model() {
    let items = this.modelFor('ex1').items;
    console.log(items);
    return items;
  }
}
