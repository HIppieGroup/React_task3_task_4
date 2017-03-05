import _ from 'lodash';

function editAction(state=[], action) {
  const newState = [...state];
  switch (action.type){
    case 'ADD_NEW':
      return ([
        ...state,
        {   id: action.payload.id,
            isAutherEdit: false,
            isReleasedEdit: false,
            isDescriptionEdit: false,
        }
      ])
    break;
    case 'DEL':
      (_.remove(newState,(item => item.id === action.payload)));
      return [...newState];
    break;
    case 'EDIT_AUTHOR':
      state[action.id] = {
          ...state[action.id], 
          isAutherEdit: action.payload,
          isReleasedEdit: false,
          isDescriptionEdit: false
        }
      return [...state];
    break;
    case 'EDIT_RELEASED':
      state[action.id] = {
        ...state[action.id], 
        isReleasedEdit: action.payload,
        isAutherEdit: false,
        isDescriptionEdit: false
      }
      return [...state];
    break;
    case 'EDIT_DESCRIPTION':
      state[action.id] = {
        ...state[action.id],
        isDescriptionEdit: action.payload,
        isAutherEdit: false,
        isReleasedEdit: false
      }
      return [...state];
    break;
    default:
      state[action.id] = {
          ...state[action.id], 
          isAutherEdit: false,
          isReleasedEdit: false,
          isDescriptionEdit: false
        }
      return [...state];
    
  }
  return state;
}

export default editAction;