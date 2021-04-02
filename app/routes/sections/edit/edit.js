import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class SectionsEditEditRoute extends Route {

  product;
  renderTemplate(){
    console.log(this.product.get('name'));
    this.render({outlet: "product"+this.product.get('id')});
  }

  model(params){
    this.product = this.store.findRecord('product', params.product_id);
    return this.store.findRecord('product', params.product_id);
  }

  @action editProduct(product){
    product.save().then(()=>this.transitionTo("sections"));
  }
}
