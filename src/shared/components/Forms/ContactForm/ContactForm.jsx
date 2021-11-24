import s from "./ContactForm.module.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  contactsSelector,
  tokenSelector,
} from "../../../../redux/selectors/selectors";
import { addContact } from "../../../../redux/contacts/contactsThunk";

const ContactForm = () => {
  const contacts = useSelector(contactsSelector);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const cbOnSubmit = (e) => {
    e.preventDefault();
    contacts.some(
      ({ name: contactName }) =>
        contactName.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <div className={s.section}>
      <h1 className={s.title}>Phonebook</h1>
      <form onSubmit={cbOnSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
