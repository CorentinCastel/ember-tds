import Abstractroute from './abstractroute';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class BoardRoute extends Abstractroute {
  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetail',
        }),
        employee: user,
      });
    }
  }

  @service userAuth;
  @action logout(){
    this.userAuth.logout();
    this.transitionTo('logout');
  }
}
