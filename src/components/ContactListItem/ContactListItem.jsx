import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { deleteContact } from 'redux/contactsSlice';
import css from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.contactsListItem}>
        {name}: {number}
        <button
          className={css.contactsListBtn}
          onClick={() => {
            toast.success(`${name} removed from the contact list.`);
            dispatch(deleteContact(id));
          }}
          type="button"
        >
          Delete
        </button>
      </li>
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
