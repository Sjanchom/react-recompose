import React from 'react';
import {pure} from 'recompose';
import ContactRow from './ContactRow'
const Table = ({contacts,onDeleteItem}) => {
 return (<table><tbody>
{
  contacts.map((contact) => {
   return <ContactRow key={contact.id} onDeleteItem={onDeleteItem} contact={contact}/>;
 })
}
</tbody></table>)

}



export default pure(Table);
