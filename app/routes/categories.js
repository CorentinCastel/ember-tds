import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesRoute extends Route {
  model(){
    return this.store.findAll('category');
  }

  afterModel(model){
    this.transitionTo("categories.contacts", model.get('firstObject'));
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
