import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookComponent extends Component {
  render() {


    return (
      <div>
        <div className="item--header">
            <h3>{this.props.onState.bookName}</h3>
        </div>
        <div className="item--sub-section">
          <h5 className="item--sub-header">Автор</h5>
            <p className="item--sub-contect" >{this.props.onState.Author}</p>
        </div>
        <div className="item--sub-section">
          <h5 className="item--sub-header">Год выпуска</h5>
            <p className="item--sub-contect" >{this.props.onState.released}</p>
        </div>  
        <div className="item--sub-section item--sub-section__full">
          <h5 className="item--sub-header">Краткое описание</h5>
            <p className="item--sub-contect" >{this.props.onState.description}</p>
        </div>    

      </div>
    )
  } 

}

export default connect(
  (state,ownProps) => ({
    onState: state.appReducers.saveAction.find(item => item.id === Number(ownProps.params.id)),
  })

  )(BookComponent);