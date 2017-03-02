import React, { Component } from 'react';
import { connect } from 'react-redux';


import '../styles/index.sass';

class App extends Component {
  render() {
    return(
      <div>
        {this.props.onState[0]}
        <button onClick={this.onAddItem.bind(this)} >ADD</button>
      </div>
    );
  }

  onAddItem(){
    this.props.onAdd('add');
  }
};

export default connect(
  state => ({
    onState: state.newReducer
  }),
  dispatch => ({
    onAdd(payload) {
      dispatch({ type: 'ADD', payload })
    }
  })
)(App);