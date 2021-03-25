import Model, {attr, hasMany} from '@ember-data/model';

export default class SectionModel extends Model {
  @attr('String') name;
  @attr('String') description;
  @hasMany('product') products;
}
