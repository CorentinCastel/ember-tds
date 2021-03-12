import Model from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('number') id;
  @attr('date') dateCreation;
  @attr('number') idUser;
  @attr('number') idEmployee;
  @attr('string') status;
  @attr('float') amount;
  @attr('float') toPay;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @attr('number') idTimeslot;
}
