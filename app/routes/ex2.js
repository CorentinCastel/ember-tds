import Route from '@ember/routing/route';
import { datas } from 'td1/data/data';
import MesServices from 'td1/classes/services';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  model() {
    return new MesServices(datas);
  }
  @action
  toggleActive(service){
    set(service, 'active', !service.active);
  }
}
