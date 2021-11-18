import s from "./App.module.css";

// import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";

import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";

// import { getContacts } from "../../redux/contacts/contactsActions";

const App = () => {
  //---------------for version without persist and hooks use---------------
  // const App = ({ contacts, getContacts }) => {
  // useEffect(() => {
  //   try {
  //     const loadContacts = JSON.parse(localStorage.getItem("contacts"));
  //     if (Array.isArray(loadContacts)) getContacts(loadContacts);
  //   } catch (error) {
  //     console.error(error);
  //     getContacts([]);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);
  //---------------for version without persist and hooks use---------------

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

//---------------for version without hooks use---------------
// App.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   getContacts: PropTypes.func.isRequired,
// };
// const mapStatetoToProps = ({ contacts }) => ({
//   contacts,
// });
// const mapDispatchToProps = (dispatch) => ({
//   getContacts: (loadContacts) => dispatch(getContacts(loadContacts)),
// });
// export default connect(mapStatetoToProps, mapDispatchToProps)(App);
//---------------for version without  hooks use---------------

export default App;
