import React, { Component } from 'react';

import './styles/filter-form.sass';

class FilterForm extends Component {
  render() {
    return(
      <form className="filter-form" onSubmit={e=>e.preventDefault()}>
        <input className="filter-form--input" onChange={this.findBook.bind(this)} ref="inputFilter" type="text" placeholder="поиск" />
      </form>
    )
  }
  findBook(event){
    event.preventDefault();
    this.props.onFilter(this.refs.inputFilter.value);
  }
}

export default FilterForm;