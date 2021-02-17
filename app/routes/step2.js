import Route from '@ember/routing/route';

export default class Step2Route extends Route {
  model(){
    return this.modelFor('step1').includedItems;
  }
}
