import React from 'react';

const DeleteItem =(props)=>{
    
    return(
      <button onClick={props.DeleteItem} disabled={props.noItems()}>
          Delete Last Item
      </button>
    )
}
export default DeleteItem;