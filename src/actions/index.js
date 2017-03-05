import * as itemAction  from './itemAction';
import * as filterAction  from './filterAction';
import * as validAction  from './validAction';

const actions = {
  ...itemAction, ...filterAction, ...validAction
}
export default actions;