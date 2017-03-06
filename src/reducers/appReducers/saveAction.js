import _ from 'lodash'; 

function saveAction(state=[], action) {
  const newState = [...state];
  switch (action.type){
    case 'ADD_NEW':
      return ([
        ...state,
        action.payload
      ])
    break;
    case 'DEL':
      (_.remove(newState,(item => item.id === action.payload)));
      return [...newState];
    break;
    case 'SAVE_NAME':
      newState.find(item => item.id === action.id).bookName = action.payload;
      return [ ...newState];
    break;
    case 'SAVE_AUTHOR':
      newState.find(item => item.id === action.id).author = action.payload;
      return [ ...newState];
    break;
    case 'SAVE_RELEASED':
      newState.find(item => item.id === action.id).released = action.payload;
      return [ ...newState];
    break;
    case 'SAVE_DESCRIPTION':
      newState.find(item => item.id === action.id).description = action.payload;
      return [ ...newState];
    break;
  }
  return [ ...state];
}

export default saveAction;