import Route from '@ember/routing/route';
import MyContacts from 'td1/classes/contacts';
import { action } from '@ember/object';

export default class ContactsRoute extends Route {
  model(){
    return new MyContacts(this.store.findAll('contact'));
  }

  @action delete(contact){
    contact.deleteRecord();
  }

  @action cancelDeletion(contacts){
    contacts.forEach((t) => t.rollbackAttributes());
  }

  @action confirmDeletion(contacts){
    contacts.forEach((t) => t.save());
  }
}
