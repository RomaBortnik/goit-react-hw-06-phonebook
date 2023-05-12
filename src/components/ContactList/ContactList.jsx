import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactListItem';
import { contactsListFilter } from 'redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContactsList = useSelector(contactsListFilter);
  return (
    <ul className={css.contactsList}>
      {filteredContactsList.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
        ></ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
