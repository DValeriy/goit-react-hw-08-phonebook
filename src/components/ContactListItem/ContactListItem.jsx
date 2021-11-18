import s from "./ContactListItem.module.css";

import React from "react";
import PropTypes from "prop-types";

import { removeContact } from "../../redux/contacts/contactsOperations";
import { useDispatch, useSelector } from "react-redux";

const ContactListItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const cbOnRemove = () => {
    dispatch(removeContact({ id, contacts }));
  };
  return (
    <li className={s.item}>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={cbOnRemove}>
        Remove
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;
