

export default function ErrorReducer(state='',action) {
  switch (action.type){
    case 'NAME_BLANK_SPACE':
      return action.payload;
  }
  return state;
} 