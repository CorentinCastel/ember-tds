export default class contacts{
  datas;

  constructor(data) {
    this.datas=data;
  }
  get contacts(){
    return this.datas.filterBy('isDeleted', false);
  }

  get deleteds(){
    return this.datas.filterBy('isDeleted', true);
  }

  get deletedsCount(){
    return this.deleteds.length;
  }

}
