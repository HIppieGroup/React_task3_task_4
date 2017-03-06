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
        state.find(item => item.id === action.id).id = action.id;
        state.find(item => item.id === action.id).isAutherEdit = action.payload;
        state.find(item => item.id === action.id).isReleasedEdit = false;
        state.find(item => item.id === action.id).isDescriptionEdit = false;
      return [
        ...state
        ];
    break;

    case 'EDIT_RELEASED':
        state.find(item => item.id === action.id).id = action.id;
        state.find(item => item.id === action.id).isAutherEdit = false;
        state.find(item => item.id === action.id).isReleasedEdit = action.payload;
        state.find(item => item.id === action.id).isDescriptionEdit = false;
      return [
        ...state
        ];
    break;
    case 'EDIT_DESCRIPTION':
        state.find(item => item.id === action.id).id = action.id;
        state.find(item => item.id === action.id).isAutherEdit = false;
        state.find(item => item.id === action.id).isReleasedEdit = false;
        state.find(item => item.id === action.id).isDescriptionEdit = action.payload;
      return [
        ...state
        ];
    break;
    default:
        state.map(item => {
            item.isAutherEdit= false;
            item.isReleasedEdit= false;
            item.isDescriptionEdit= false;
        })
      return [
        ...state
        ];
  }
  return state;
}

export default editAction;