import { createStore } from 'redux';
import reducers from '../reducers';
import { loadState} from './localStorage';

const persistedState = loadState();

export default function configureStore() {
  return createStore(reducers, persistedState);
}
