import { getFilter } from 'redux/filterSlice';
import { Contact } from 'components';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filter = useSelector(getFilter);
  const contacts = useSelector(state =>
    selectContacts(state).filter(contact => contact.name.includes(filter))
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {!isLoading && error && <p>Something went wrong</p>}
      <List>
        {contacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))}
      </List>
    </>
  );
};
