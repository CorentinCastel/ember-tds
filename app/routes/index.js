import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class IndexRoute extends Route {

  model(){
    return {};
  }

  @action
  connect(data){
    console.log(data.username);
    console.log(data.pass);
  }
}
