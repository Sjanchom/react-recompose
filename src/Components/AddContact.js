import React from 'react';
import {compose,withHandlers,withState} from 'recompose';

const enhance = compose(
  withState('detail','setDetail',{name:'',phoneNumber:''}),
  withHandlers({
    onChange:props => e => props.setDetail({...props.detail,[e.target.name]:e.target.value}),
    onAddContact:props=> () => {
      const {detail:{name,phoneNumber},onAddItem,setDetail} = props;

      if(name && phoneNumber) {
        onAddItem({name,phoneNumber});
        setDetail({name:'',phoneNumber:''});
      }
    }
  })
);

export default enhance(({onChange,onNameChange,onTelChange,onAddContact,detail}) => {
  return(<div>
            <input value={detail.name} onChange={onChange}  placeholder='name'  name='name' type='text' />
            <input value={detail.phoneNumber} onChange={onChange}  placeholder='tel'  name='phoneNumber' type='number' />
            <button onClick={onAddContact}>Add</button>
  </div>);
});
