import Route from '@ember/routing/route';

export default class CategoriesUpdateRoute extends Route {

  renderTemplate(controller, model) {
    this.render('categories.add');
  }

  @action save(contact){
    contact.save().then(() => {
      this.transitionTo('categories');
    });
  }
}
