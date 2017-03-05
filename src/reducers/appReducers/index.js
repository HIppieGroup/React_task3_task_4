import _ from 'lodash';
import { combineReducers } from 'redux';

import saveAction from './saveAction';
import editAction from './editAction';

const appReducers = combineReducers({
  saveAction,
  editAction,
}) 

export default appReducers;


