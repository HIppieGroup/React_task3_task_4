import { combineReducers } from 'redux';
import appReducers from './appReducers';
import { FilterReducer, ErrorReducer } from './additionalReducers';
import { routerReducer } from 'react-router-redux';



export default combineReducers({
  routing: routerReducer,
  appReducers,
  FilterReducer,
  ErrorReducer
});