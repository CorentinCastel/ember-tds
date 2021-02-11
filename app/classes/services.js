import { promos } from "../data/data";

export default class Services {
  services = [];
  promos = {};
  @tracked codePromo;

  constructor(services, promos) {
    this.services = services;
    this.promos = promos;
  }

  get countActive() {
    return this.services.filterBy('active', true).length;
  }

  get sumActive(){
    let s = this.services.filterBy('active', true)
    let r = 0;
    s.forEach(s =>{
      r += s.price;
    });
    return r;
  }
}
