import { Form, Input, Add } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onContactFormSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target.elements;

    if (contacts.some(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: name.value, phone: phone.value }));
    e.target.reset();
  };
  return (
    <Form onSubmit={onContactFormSubmit}>
      <label htmlFor="nameInput">Name</label>
      <Input
        id="nameInput"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="numberInput">Number</label>
      <Input
        id="numberInput"
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Add type="submit">Add contact</Add>
    </Form>
  );
};
