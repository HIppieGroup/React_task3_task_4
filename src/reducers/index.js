import { combineReducers } from 'redux';
import appReducers from './appReducers';
import { FilterReducer, ErrorReducer } from './additionalReducers';



export default combineReducers({
  appReducers,
  FilterReducer,
  ErrorReducer
});