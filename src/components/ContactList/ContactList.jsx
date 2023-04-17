import { getFilter } from 'redux/filterSlice';
import { Contact } from 'components';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(state =>
    selectContacts(state).filter(contact => contact.name.includes(filter))
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};
