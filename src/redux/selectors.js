export const getContacts = ({ contacts: { contacts } }) => contacts;

export const getFilterValue = ({ filter }) => filter;

export const contactsListFilter = ({ contacts: { contacts }, filter }) => {
  if (!filter) {
    return contacts;
  }
  const filterToLowerCase = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );
};
