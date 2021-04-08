import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class OrderModel extends Model {

  @attr('date') dateCreation;
  @attr('number') amount;
  @attr('number') itemsNumber;
  @belongsTo('user') user;
  @hasMany('orderdetail') orderdetails;
  get count(){
    return this.orderdetails.length;
  }
}
