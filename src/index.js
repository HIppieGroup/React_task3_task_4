import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import reducers from './reducers';
import configureStore from './store/configureStore';
import { saveState } from './store/localStorage';


const store = configureStore(); 

store.subscribe( () => {
  saveState({ appReducers: store.getState().appReducers });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
