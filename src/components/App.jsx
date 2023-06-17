
import Form from './Form';
import Contacts from './Contacts';
import FindContact from './FindContact';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations'



export default function App() {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Form />
      <FindContact />
      {contacts.length > 0 && (
        <Contacts />
      )}
    </>
  );
}
