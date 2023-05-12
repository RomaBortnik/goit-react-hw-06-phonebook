import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const { contactsListLabel, contactsFormInput } = css;
  const dispatch = useDispatch();
  return (
    <label className={contactsListLabel}>
      Find contacts by name
      <input
        onChange={e => dispatch(setFilter(e.target.value))}
        className={contactsFormInput}
        type="text"
        name="filter"
      />
    </label>
  );
};

export default Filter;
