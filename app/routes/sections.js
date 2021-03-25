import Abstractroute from './abstractroute';
import { action } from "@ember/object";


export default class SectionsRoute extends Abstractroute {
  model(){
    return this.store.findAll('section');
  }

  @action add(){
    this.transitionTo("sections.add");
  }

  @action delete(section){
    section.deleteRecord()
  }


}
