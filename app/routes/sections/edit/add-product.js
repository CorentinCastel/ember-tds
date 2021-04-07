import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import AbstractrouteRoute from "../../abstractroute";

export default class SectionsEditAddProductRoute extends AbstractrouteRoute {
  model(params){
    return RSVP.hash( {
      sections: this.store.findRecord('section', params.section_id),
      products: this.store.findAll('product'),
      product:{}
    });
  }

  @action save(data){
    data.product.section = data.sections;
    let product = this.store.createRecord('product', data.product);
    product.save().then(()=>{
      this.transitionTo('sections');
    });
  }
}
