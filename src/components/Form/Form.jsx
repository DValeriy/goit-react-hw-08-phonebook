import s from "./Form.module.css";

// import PropTypes from "prop-types";
import { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import shortid from "shortid";

import { addContact } from "../../redux/contacts/contactsActions";
import { contactsSelector } from "../../redux/selectors/selectors";

const Form = () => {
  // ----without hooks use----
  // const Form = ({ addContact, contacts }) => {
  // const contacts = useSelector(({ contacts }) => contacts);
  // ----without hooks use----

  const contacts = useSelector((state) => contactsSelector(state));
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
      : dispatch(addContact({ name, number, id: shortid.generate() }));
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

// ----without hooks use----
// Form.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   addContact: PropTypes.func.isRequired,
// };

// const mapStatetoToProps = ({ contacts }) => ({
//   contacts,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addContact: (contact) => dispatch(addContact(contact)),
// });

// export default connect(mapStatetoToProps, mapDispatchToProps)(Form);
// ----without hooks use----

export default Form;
