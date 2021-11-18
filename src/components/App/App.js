import s from "./App.module.css";

import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsOperations";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div className="App">
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
