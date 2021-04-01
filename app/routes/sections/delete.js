import Route from '@ember/routing/route';
import { action } from "@ember/object";
import Abstractroute from "../abstractroute";

export default class SectionsDeleteRoute extends Abstractroute {
  model(params){
    return this.store.findRecord('product', {
      filter: {
        idSection: params.section_id
      }
    });
  }
  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }

  @action confirm(section){
    this.deleteProducts(section.products).then(() => {
      section.destroyRecord();
    });
  }

  @action annuler(){
    this.transitionTo("sections");
  }
}
