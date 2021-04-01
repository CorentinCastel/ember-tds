import Abstractroute from "../abstractroute";
import { action } from "@ember/object";

export default class SectionsEditRoute extends Abstractroute {
  renderTemplate(params){
    this.render({outlet: 2});
  }
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
