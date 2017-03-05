

export default function(state='',action) {

  switch(action.type){
    case 'FIND_BOOK':
      return action.payload
    default:
      return state;
  }
return state;
}