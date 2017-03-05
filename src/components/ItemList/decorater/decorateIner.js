import React from 'react';

export function decorateIner(data, onEdit, isEdit, id, what, onSaveEdit){
  if (isEdit === true && what === 'DESCRIPTION') {
    return (
      <form onSubmit={onSubForm}  >
        <textarea type="text" className="item--edit item--edit__textarea" ref="inputEdit" defaultValue={data}></textarea>
        <a href='#' className="item--btn item--btn__save" onClick={ (e) => { e.preventDefault(); onSaveEdit(what)} }>
          сохранить
        </a>
      </form>
      )
  } else if (isEdit === true) {
    return (
      <form onSubmit={onSubForm} >
        <input type="text" className="item--edit item--edit__input" ref="inputEdit" defaultValue={data}/>
        <a href='#' className="item--btn item--btn__save" onClick={ (e) => { e.preventDefault(); onSaveEdit(what)} }>
         Сохранить
        </a>
      </form>
      )
  } else if (data == ' ' || data == '') {
    return (
      <div>
        <p className="item--sub-contect" >Не указано</p>
        <a href='#' className="item--btn item--btn__edit" onClick={ (e) => { e.preventDefault(); onEdit(id, what)} }>
          Редактировать
        </a>
      </div>
      )
  } else {
    return (
      <div>
        <p className="item--sub-contect" >{data}</p>
        <a href='#' className="item--btn item--btn__edit" onClick={ (e) => { e.preventDefault(); onEdit(id, what)} }>
          Редактировать
        </a>
      </div>
      )
  }

  const onSubForm = (e) => e.preventDefault();
}

