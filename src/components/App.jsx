import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export const App = () => {
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm></ContactForm>
      <h2 className="title">Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </>
  );
};
