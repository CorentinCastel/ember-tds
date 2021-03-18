import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class SectionsController extends Controller {
  @service userAuth;
  get email(){
    console.log('test');
    return this.userAuth.getUser().email;
  }
}
