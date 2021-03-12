import Route from '@ember/routing/route';
import UserAuthService from "../services/user-auth";


export default class AbstractrouteRoute extends Route {
  @services userAuth;
  model(){
    this.userAuth = new UserAuthService();
  }
  redirect() {
    if (!this.userAuth.isAuth) {
      this.transitionTo('index');
    }
  }
}
