import Model from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('number') id;
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
}
