import AbstractrouteRoute from "./abstractroute";
import { action } from '@ember/object';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class MyOrdersRoute extends AbstractrouteRoute {
  @service userAuth;

  model(){
    let user = this.userAuth.user;
    return RSVP.hash({
      orders: this.store.query('order', {
        filter: { idEmployee: user.id },
        include: 'orderdetail',
      }),
      employee: user,
    });
  }


}
