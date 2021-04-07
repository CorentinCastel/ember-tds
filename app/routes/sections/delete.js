import Route from '@ember/routing/route';
import { action } from "@ember/object";
import Abstractroute from "../abstractroute";
import RSVP from 'rsvp';

export default class SectionsDeleteRoute extends Abstractroute {

  idSection;
  renderTemplate(){
    this.render({outlet: this.idSection});
  }

  model(params){
    this.idSection = params.section_id;
    return RSVP.hash({
      section:this.store.findRecord('section', params.section_id),
      products:this.store.query('product', {
        filter:{
          idSection: params.section_id
        }
      })
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
    }).then(()=>{
      this.transitionTo("sections");
    });
  }

  @action annuler(){
    this.transitionTo("sections");
  }
}
