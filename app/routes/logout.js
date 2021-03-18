import Route from '@ember/routing/route';
import { action } from '@ember/object';


export default class LogoutRoute extends Route {
  @action accueil(){
    this.transitionTo('index');
  }
}
