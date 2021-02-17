import JSONAPIAdapter from '@ember-data/adapter/json-api';
import Adapter from "ember-local-storage/adapters/local";

export default Adapter.extend({
  modelNamespace: 'contact-app'
});

