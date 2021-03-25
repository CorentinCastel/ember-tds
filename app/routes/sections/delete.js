import Route from '@ember/routing/route';
import { action } from "@ember/object";
import Abstractroute from "../abstractroute";

export default class SectionsDeleteRoute extends Abstractroute {
  model(params){
    return this.store.query('product', {
      filter: {
        idSection: params.section_id
      }
    });
  }

  @action confirm(){
    let section = this.store.findAll('section');
    section.forEach((s)=>{
      s.save();
    });
  }

  @action annuler(){
    this.transitionTo("sections");
  }
}
