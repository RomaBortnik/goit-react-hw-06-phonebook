import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ filteredContactsList }) => {
  return (
    <ul className={css.contactsList}>
      {filteredContactsList.map(contact => {
        const { name, number, id } = contact;
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            id={id}
          ></ContactListItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
