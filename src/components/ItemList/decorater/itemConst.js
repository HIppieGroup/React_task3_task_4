export function contentGener(props, onSaveEdit, context) {
    const action = props.inerProps;
    const data = props.inerItem;
    const dev = props.devState.find(item => item.id === data.id);
    
    switch (context){
      case 'AUTHOR':
        return ([
        data.author, 
        action.onEdit, 
        dev.isAutherEdit, 
        data.id, 
        'AUTHOR', 
        onSaveEdit
      ])
    case 'RELEASED':
      return ([
        data.released, 
        action.onEdit, 
        dev.isReleasedEdit, 
        data.id, 
        'RELEASED', 
        onSaveEdit
      ])
    case 'DESCRIPTION':
      return ([
        data.description, 
        action.onEdit, 
        dev.isDescriptionEdit, 
        data.id, 
        'DESCRIPTION', 
        onSaveEdit
      ])
    }
};


