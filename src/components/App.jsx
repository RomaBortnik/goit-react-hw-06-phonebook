// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { getContacts } from 'redux/selectors';
import { getFilterValue } from 'redux/selectors';

// const STORAGE_KEY = 'contacts';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || INITIAL_VALUE
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (contacts === INITIAL_VALUE) {
  //     return;
  //   }
  //   contacts.length === 0
  //     ? localStorage.removeItem(STORAGE_KEY)
  //     : localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  console.log(contacts);

  const contactsListFilter = () => {
    const filterToLowerCase = filter.toLowerCase();
    const filteredContactsList = contacts.filter(contact => {
      console.log(contact.name);
      return contact.name.toLowerCase().includes(filterToLowerCase);
    });
    return filteredContactsList ? filteredContactsList : contacts;
  };

  const filteredContactsList = contactsListFilter();
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm></ContactForm>
      <h2 className="title">Contacts</h2>
      <Filter></Filter>
      <ContactList filteredContactsList={filteredContactsList}></ContactList>
    </>
  );
};
