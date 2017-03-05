import React, { Component } from 'react';

import Item from './Item';

import './styles/item-list.sass'

class ItemList extends Component {
  render() {
    return(
      <ul className="item-list">
        {this.renderItem()}
      </ul>
    )
  }

  renderItem() {
    const props = {
      onDelItem: this.props.onDelItem.bind(this),
      onEdit: this.props.onEdit.bind(this),
      onSave: this.props.onSaveEdit.bind(this)
    }


    return this.props.stateItem.map((item, index) => {
      return (
        <Item 
          inerItem={item} 
          inerProps={props} 
          key={index} 
          devState={this.props.stateDev}
         />

        )
    });
  }
}

export default ItemList;