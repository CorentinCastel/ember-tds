import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from "rsvp";

export default class SectionsEditDeleteRoute extends Route {
  model(params) {
    console.log(params.product_id);
    return RSVP.hash({
      product: this.store.findRecord('product', params.product_id),
      section: this.store.findRecord('section', 1)
    });
  }

  @action annuler(product){
    this.transitionTo("sections.edit", product.section.get('id'));
  }

  @action confirm(product){
    let idSection = product.section.get('id');
      product.destroyRecord();

    this.transitionTo("sections.edit", idSection);
  }
}
