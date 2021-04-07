import Route from '@ember/routing/route';
import { action } from "@ember/object";
import AbstractrouteRoute from "../abstractroute";

export default class SectionsAddRoute extends AbstractrouteRoute {
  model(){
    return {};
  }

  @action save(data){
    let section = this.store.createRecord('section', data);
    section.save().then(()=>{
      this.transitionTo('sections');
    });
  }

  @action annuler(){
    this.transitionTo('sections');
  }
}
