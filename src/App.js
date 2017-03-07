import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'
import { CreateForm } from './components/CreateForm';
import { FilterForm } from './components/FilterForm';
import { ItemList   } from './components/ItemList';

import actions from './actions';

import '../styles/index.sass';

class App extends Component {
  render() {
    const { action, valid, editReducer, saveReducer } = this.props;
    return(
      <div className="wrapper">
        <CreateForm 
          onAddItem={action.onAdd.bind(this)} 
          onValidName={action.onValidName.bind(this)}
          Error={valid}
          length={editReducer}
        />
        <FilterForm onFilter={action.onFilterBook.bind(this)}/>
        <ItemList 
          editReducer={editReducer}
          saveReducer={saveReducer} 
          onDelItem={action.onDelItem.bind(this)}
          onEdit={action.onEdit.bind(this)}
          onSaveEdit={action.onSaveEdit.bind(this)}
        />
      </div>
    );
  }
};

export default connect(
  state => ({
    saveReducer: state.appReducers.saveAction.filter( item => {
      return item.bookName.toLowerCase().includes(state.FilterReducer.toLowerCase())
    }),
    editReducer: state.appReducers.editAction,
    valid: state.ErrorReducer
  }),
  dispatch => ({
    action: bindActionCreators(actions, dispatch)
  })
)(App);