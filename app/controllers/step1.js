import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includedItems = [];
  @tracked dispoItems_ = [];
  @tracked includedItems_ = [];

  @action
  changeDispo(elements) {
    this.dispoItems_ = elements;
    console.log(this.dispoItems_);
  }
  @action
  changeIncluded(elements) {
    this.includedItems_ = elements;
  }
  @action
  add(source, dest, what) {
    var l = what.length;
    what.forEach(function (elm) {
      dest.pushObject(elm);
    });
    for (let i = 0; i < l; i++) {
      if (source == what) source.removeObject(what[0]);
      else source.removeObject(what[i]);
    }

    this.dispoItems_ = [];
    this.includedItems_ = [];
  }
}
