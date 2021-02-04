export default class Services {
  services = [];
  constructor(services) {
    this.services = services;
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
