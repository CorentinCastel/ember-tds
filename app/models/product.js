import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('String') name;
  @attr('String') comments;
  @attr('String') image;
  @attr('number') price;
  @attr('number') promotion;
  @attr('number') idSection;
}
