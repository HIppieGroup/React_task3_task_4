import React, { Component } from 'react';

import { validSpace } from './Validation/space';
import './styles/create-form.sass';

class CreateForm extends Component {
  render() {
    return (
      <form className="create-form" ref="createForm" onSubmit={this.createBook.bind(this)}>
        {this.renderError()}
        <input 
          className="create-form--input" 
          ref="inputName" 
          type="text" 
          placeholder="Название книги" 
          onChange={this.testValidName.bind(this)}
        />
        <input className="create-form--input" ref="inputAuther" type="text" placeholder="Автор" />
        <input className="create-form--input" ref="inputReleased" type="text" placeholder="Год выпуска" />
        <textarea className="create-form--text-area" ref="inputDecription" placeholder="Краткое описание" />
        <button>Добавить</button>
      </form>
    )
  };

  renderError() {
    if (this.props.Error != '') {
      return <div className="error-mesege" >{this.props.Error }</div>
    }
  }

  // renderError = () => this.props.Error != '' ? <div>{this.props.Error }</div> : false;

  testValidName(){
    if (!validSpace(this.refs.inputName.value.replace(/\s/g,''))){
      return true;
    }
    this.props.onValidName('');
  }

  createBook(event){
    event.preventDefault();

    if (this.testValidName()) {
      this.props.onValidName('не может быть пустым')
      return
    };

    const book = {
      bookName: this.refs.inputName.value,
      author: this.refs.inputAuther.value.replace(/\s/g,' '),
      released: this.refs.inputReleased.value.replace(/\s/g,' '),
      description: this.refs.inputDecription.value.replace(/\s/g,' '),
    }
    this.props.onAddItem(book, this.props.length);
    this.refs.createForm.reset();
  }

}

export default CreateForm;