import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditDeleteRoute extends Route {
  model(params){
    return this.store.query("product", {
      filter:{
        id:params.product_id
      }
    });
  }

  @action annuler(product){
    this.transitionTo("sections.edit", {section_id: product.idSection});
  }

  @action confirm(product){
    product.deleteRecord().save();
    this.transitionTo("sections.edit", {section_id: product.idSection});
  }
}
