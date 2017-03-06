import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import reducers from './reducers';
import configureStore from './store/configureStore';
import { saveState } from './store/localStorage';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import BookComponent from './components/Book/BookComponent';
import NotFound from './components/NotFoun';


const store = configureStore(); 
const history = syncHistoryWithStore(hashHistory, store);

store.subscribe( () => {
  saveState({ appReducers: store.getState().appReducers });
});

ReactDOM.render(
  <Provider store={store}>
   <Router history={history} >
    <Route path="/" component={App} />
    <Route path="/item/:id" component={BookComponent} />
   </Router>
  </Provider>,
  document.getElementById('root')
);
