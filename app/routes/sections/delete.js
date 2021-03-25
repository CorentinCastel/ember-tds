import Route from '@ember/routing/route';
import { action } from "@ember/object";

export default class SectionsDeleteRoute extends Route {
  model(params){
    this.sectionid = params.section_id;
    console.log(params);
    console.log(this.store.query('product', {
      filter: {
        idSection: params.section_id
      }
    }));
    return this.store.query('product', {
      filter: {
        idSection: params.section_id
      }
    });
  }

  @action confirm(data){
    console.log(data);
    let section = this.store.query('section', {
      filter: {
        id: data.idSection
      }
    });
    console.log(section);
    section.deleteRecord();
    section.save().then(() => {
      this.transitionTo("sections");
    });
  }
}
