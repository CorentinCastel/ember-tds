import Abstractroute from "../abstractroute";
import { action } from "@ember/object";
import RSVP from 'rsvp';

export default class SectionsEditRoute extends Abstractroute {
  idSection;
  renderTemplate(){
    this.render({outlet: this.idSection});
  }
  model(params){
    this.idSection = params.section_id;
    return RSVP.hash({
      products:this.store.query("product", {
        filter: {
          idSection: params.section_id
        }
      }),
      idSection:params.section_id,
      section:this.store.findRecord("section", params.section_id)
    });
  }

  @action editSection(section){
    console.log(section.get('name'));
    section.save().then(()=>{
      this.transitionTo("sections")
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

  @action reset(idProduct){
    this.transitionTo("sections.edit", this.idSection).then(()=>{
      this.transitionTo("sections.edit.edit", idProduct);
    });
  }
}
