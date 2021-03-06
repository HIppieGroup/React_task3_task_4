import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookComponent extends Component {
  render() {


    return (
      <div className="wrapper">
        <div className="item">
          <div className="item--header">
              <h3>{this.props.onState.bookName}</h3>
          </div>
          <div className="item--sub-section">
            <h5 className="item--sub-header">Автор</h5>
              <p className="item--sub-contect" >{this.renderAuthor()}</p>
          </div>
          <div className="item--sub-section">
            <h5 className="item--sub-header">Год выпуска</h5>
              <p className="item--sub-contect" >{this.renderReleased()}</p>
          </div>  
          <div className="item--sub-section item--sub-section__full">
            <h5 className="item--sub-header">Краткое описание</h5>
              <p className="item--sub-contect" >{this.renderDescription()}</p>
          </div>    
        </div>
      </div>
    )
  } 

  renderAuthor = () => this.props.onState.author ? this.props.onState.author : 'Автор не указан' ;
  renderReleased = () => this.props.onState.released ? this.props.onState.released : 'Год выпуска не указан' ;
  renderDescription = () => this.props.onState.description ? this.props.onState.description : 'Описание не указано' ;

}

export default connect(
  (state,ownProps) => ({
    onState: state.appReducers.saveAction.find(item => item.id === Number(ownProps.params.id)),
  }))(BookComponent);