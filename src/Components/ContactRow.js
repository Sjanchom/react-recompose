import React from 'react';
import {withHandlers} from 'recompose';

export default  withHandlers({
  onClick:props=>()=>props.onDeleteItem(props.contact.id)
})(({contact:{id,name,phoneNumber},onClick}) => {
          return (<tr>
         <td>{name}</td>
         <td>{phoneNumber}</td>
         <td><button onClick={onClick}>Delete</button></td>
          </tr>)
});
