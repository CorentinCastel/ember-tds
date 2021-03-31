import Abstractroute from "../abstractroute";
import { action } from "@ember/object";

export default class SectionsEditRoute extends Abstractroute {
  model(params){
    console.log(params.section_id);
    return this.store.query("product", {
      filter: {
        idSection: params.section_id
      }
    });
  }

  @action save(section){
    section.save().then(() => {
      this.transitionTo('sections');
    });
  }

  @action annuler(){
    this.transitionTo("sections");
  }
}
