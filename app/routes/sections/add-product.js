import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import AbstractrouteRoute from "../abstractroute";

export default class SectionsEditAddProductRoute extends AbstractrouteRoute {
  model(){
    return RSVP.hash( {
      sections: this.store.findAll('section'),
      products: this.store.findAll('product'),
    });
  }

  @action save(data){
    let product = this.store.createRecord('product', data);
    product.save().then(()=>{
      this.transitionTo('sections');
    });
  }

  @action annuler(){
    this.transitionTo("sections");
  }
}
