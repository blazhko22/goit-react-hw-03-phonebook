import React from 'react';
import ContactsItem from '../ContactsItem';
import s from './ContactList.module.css';

function ContactsList({ contacts, onRemoveContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(el => (
        <ContactsItem
          key={el.id}
          contact={el}
          onRemoveContact={onRemoveContact}
        ></ContactsItem>
      ))}
    </ul>
  );
}

export default ContactsList;