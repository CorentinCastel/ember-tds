import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params /*, hash*/) {
  let [value, symbol] = params;
  switch (symbol) {
    case '€':
      return value + '€';
    case '$':
      return '$' + value;
  }
  return value + '€';
});
