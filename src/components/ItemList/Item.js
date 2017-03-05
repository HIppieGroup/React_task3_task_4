import React, { Component } from 'react';

import { decorateIner, contentGener } from './decorater';

import './styles/item.sass';

class Item extends Component {
  render() {

    const date = this.props; 

    return(
      <li className="item">
        <h3 className="item--header">{this.props.inerItem.bookName}</h3>
        <div className="item--sub-section">
          <h5 className="item--sub-header">Автор</h5>
          {decorateIner(...contentGener(date, this.onSaveEdit.bind(this), 'AUTHOR'))}
        </div>
        <div className="item--sub-section">
          <h5 className="item--sub-header">Год выпуска</h5>
          {decorateIner(...contentGener(date, this.onSaveEdit.bind(this), 'RELEASED'))}
        </div>  
        <div className="item--sub-section item--sub-section__full">
          <h5 className="item--sub-header">Краткое описание</h5>
          {decorateIner(...contentGener(date, this.onSaveEdit.bind(this), 'DESCRIPTION'))}
        </div>    
        <a href='#' className="item--btn item--btn__delete" onClick={this.onDeleteElement.bind(this)}>Удалить Книгу</a>
      </li>
    )  

  }

  onSaveEdit(what) {
    const id = this.props.inerItem.id;
    const text = this.refs.inputEdit.value;
    this.props.inerProps.onSave(id, what, text);
    return false;
  }

  onDeleteElement(e) {
    e.preventDefault();
    this.props.inerProps.onDelItem(this.props.inerItem.id);
  }
  
}

export default Item;