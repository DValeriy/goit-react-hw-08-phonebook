import s from "./App.module.css";

import { Component } from "react";
import shortid from "shortid";

import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    try {
      const loadContacts = JSON.parse(localStorage.getItem("contacts"));
      if (Array.isArray(loadContacts)) {
        this.setState({
          contacts: loadContacts,
        });
      }
    } catch (error) {
      console.error(error);
      this.setState({
        contacts: [],
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts)
      localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  handleSubmitForm = ({ name, number }) => {
    const { contacts } = this.state;

    contacts.some(
      ({ name: contactName }) =>
        contactName.toLocaleLowerCase() === name.toLocaleLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState((prev) => ({
          contacts: [
            ...prev.contacts,
            { name, number, id: shortid.generate() },
          ],
        }));
  };
  handleFilter = ({ target }) => {
    const { value } = target;
    this.setState({
      filter: value,
    });
  };
  removeItem = (id) => {
    // const delItem = target.closest("LI").firstChild.textContent;
    this.setState((prev) => ({
      contacts: prev.contacts.filter(({ name }) => name !== id),
      // contacts: [...prev.contacts.filter(({ name }) => name !== delItem)],
    }));
  };
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
      : contacts;
  };
  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="App">
        <h1 className={s.title}>Phonebook</h1>
        <Form handleSubmitForm={this.handleSubmitForm} />
        <h2 className={s.title}>Contacts</h2>
        <Filter handleFilter={this.handleFilter} value={filter} />
        <ContactList
          contacts={this.filteredContacts()}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
