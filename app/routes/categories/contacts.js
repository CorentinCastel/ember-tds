import Route from '@ember/routing/route';
import MyContacts from 'td1/classes/contacts';
import { action } from '@ember/object';

export default class CategoriesContactsRoute extends Route {
  model(params){
    return new MyContacts(this.store.findAll('contact')).filterBy('category', params.category_id);
  }

  setupController(controller, model){
    controller.set('datas', model.contacts);
  }

  willTransition(){

  }

  @action delete(contact){
    contact.deleteRecord();
  }

  @action cancelDeletion(contacts){
    contacts.forEach((t) => t.rollbackAttributes());
  }

  @action update(category, contact){
    this.transitionTo("categories.contacts.update", category.filterBy('contact_id', contact.id));
  }

  @action confirmDeletion(contacts){
    contacts.forEach((t) => t.save());
  }
}
