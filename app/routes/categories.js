import Route from '@ember/routing/route';
import MyCategories from 'td1/classes/contacts';
import { action } from '@ember/object';

export default class CategoriesRoute extends Route {
  model(){
    return new MyCategories(this.store.findAll('categories'));
  }

  afterModel(model){

  }

  @action delete(category){
    category.deleteRecord();
  }

  @action cancelDeletion(categories){
    categories.forEach((t) => t.rollbackAttributes());
  }

  @action confirmDeletion(categories){
    categories.forEach((t) => t.save());
  }
}
