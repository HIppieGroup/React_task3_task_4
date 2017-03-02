
const initialStore = [
  'bbb'
];

export default function newReducer(state=initialStore, action){
  if (action.type === 'ADD') {
    return ([
      ...state,
      action.payload
    ])
  }

  return state;
}