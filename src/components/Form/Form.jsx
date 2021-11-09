import s from "./Form.module.css";

import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ handleSubmitForm }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contact = { name, number };
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
    handleSubmitForm(contact);
    setName("");
    setNumber("");
  };

  return (
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
  );
};

Form.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

export default Form;
