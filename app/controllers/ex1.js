import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';


export default class Ex1Controller extends Controller {
  @tracked content = "";
  @tracked info = "";
  MAX = 100;

  get size(){
    return this.MAX - this.content.length;
  }

  get style() {
    if (this.size >= 50) {
      return "alert-info";
    }
    if (this.size >=20){
      return "alert-warning";
    }
    return "alert-danger";
  }
  @action
  clear(){
    this.content = "";
    this.info = "";
  }

  @action
  update(){
    console.log("update");
    this.info = "Contenu modifié";
  }
}
