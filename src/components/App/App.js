import s from "./App.module.css";

import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsOperations";
import { isErrorSelector, isLoadingSelector } from "../../redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const isError = useSelector(isErrorSelector);

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div className="App">
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter />

      {!isError ? <ContactList /> : <p>{isError}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default App;
