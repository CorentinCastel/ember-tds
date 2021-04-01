import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from "rsvp";

export default class SectionsEditDeleteRoute extends Route {
  model(params){
    console.log(params.product_id);
    return RSVP.hash({
      product: this.store.query('product', {
        filter: { id: params.product_id }
      })
    });
  }

  @action annuler(product){
    this.transitionTo("sections.edit", {section_id: product.idSection});
  }

  @action confirm(product){
    if(Array.isArray(product)){
      product[0].deleteRecord().save();
    }
    else{
      console.log("else");
      product.deleteRecord().save();
    }

    this.transitionTo("sections.edit", {section_id: product.idSection});
  }
}
