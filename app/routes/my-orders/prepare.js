import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class MyOrdersPrepareRoute extends Route {
  model(params){
    let order = this.store.findRecord('order', params.order_id);
    return RSVP.hash({
      products: order.get('orderdetails'),
      order:order
    })
  }
}
