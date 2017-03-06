import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './styles/filter-form.sass';

class FilterForm extends Component {
  render() {
    return(
      <form className="filter-form" onSubmit={e=>e.preventDefault()}>
        <input className="filter-form--input" onChange={this.findBook.bind(this)} ref="inputFilter" type="text" placeholder="поиск" />
      </form>
    )
  }



  findBook(){
    this.props.onFilter(this.refs.inputFilter.value);
    if (this.refs.inputFilter.value == '') {
      browserHistory.push({ query: { } });
    }else {
      browserHistory.push({ query: { search:this.refs.inputFilter.value} });
    }
  }
}

export default FilterForm;