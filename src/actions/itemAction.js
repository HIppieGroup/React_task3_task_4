

export function onAdd(book, onState) {
  const payload = {
    id: onState.length ? onState[onState.length - 1].id + 1 : 0,
    ...book
  }
  return { type: 'ADD_NEW', payload }
}

export function onDelItem(id) {
  return { type: 'DEL', payload: id }
}

export function onEdit(id, input){
  switch (input){
    case 'AUTHOR':
      return { type: 'EDIT_AUTHOR', id, payload: true }
    case 'RELEASED':
      return { type: 'EDIT_RELEASED', id, payload: true }
    case 'DESCRIPTION':
      return { type: 'EDIT_DESCRIPTION', id, payload: true }
    default: 
      return;
  }
}

export function onSaveEdit(id, input, text){
  switch (input){
    case 'AUTHOR':
      return { type: 'SAVE_AUTHOR', id, payload: text }
    case 'RELEASED':
      return { type: 'SAVE_RELEASED', id, payload: text }
    case 'DESCRIPTION':
      return { type: 'SAVE_DESCRIPTION', id, payload: text }
    default: 
      return;
  }
}
