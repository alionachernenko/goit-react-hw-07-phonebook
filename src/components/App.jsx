import { ContactForm, ContactList, Filter } from 'components';
import { Phonebook } from './App.styled';

export const App = () => {
  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Phonebook>
  );
};
