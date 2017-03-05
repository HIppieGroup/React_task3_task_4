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
    return(
      <div className="wrapper">
        <CreateForm 
          onAddItem={this.props.action.onAdd.bind(this)} 
          onValidName={this.props.action.onValidName.bind(this)}
          Error={this.props.valid}
          length={this.props.devState}
        />
        <FilterForm onFilter={this.props.action.onFilterBook.bind(this)}/>
        <ItemList 
          stateDev={this.props.devState}
          stateItem={this.props.onState} 
          onDelItem={this.props.action.onDelItem.bind(this)}
          onEdit={this.props.action.onEdit.bind(this)}
          onSaveEdit={this.props.action.onSaveEdit.bind(this)}
        />
      </div>
    );
  }
};

export default connect(
  state => ({
    onState: state.appReducers.saveAction.filter( item => {
      return item.bookName.toLowerCase().includes(state.FilterReducer.toLowerCase())
    }),
    devState: state.appReducers.editAction,
    valid: state.ErrorReducer
  }),
  dispatch => ({
    action: bindActionCreators(actions, dispatch)
  })
)(App);