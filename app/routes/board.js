import Route from '@ember/routing/route';
import Abstractroute from './abstractroute';

export default class BoardRoute extends Abstractroute {
  model(){
    super.redirect();
    return {};
  }
}
