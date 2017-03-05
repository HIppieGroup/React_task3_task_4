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
      state[action.id] = {...state[action.id], bookName: action.payload}
    break;
    case 'SAVE_AUTHOR':
      state[action.id] = {...state[action.id], author: action.payload}
    break;
    case 'SAVE_RELEASED':
      state[action.id] = {...state[action.id], released: action.payload}
    break;
    case 'SAVE_DESCRIPTION':
      state[action.id] = {...state[action.id], description: action.payload}
    break;
  }
  return state;
}

export default saveAction;