import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditAddProductRoute extends Route {
  model(){
    return {};
  }

  @action save(data){
    data.idSection = 1;
    let product = this.store.createRecord('product', data);
    product.save().then(()=>{
      this.transitionTo('sections');
    });
  }
}
