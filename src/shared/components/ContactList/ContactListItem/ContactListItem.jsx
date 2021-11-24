import s from "./ContactListItem.module.css";

import React from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "../../../../redux/selectors/selectors";
import { removeContact } from "../../../../redux/contacts/contactsThunk";

const ContactListItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  const token = useSelector(tokenSelector);
  const cbOnRemove = () => {
    dispatch(removeContact(id));
  };
  return (
    <li className={s.item}>
      <span>{name}</span>
      <span>{number}</span>
      <button className={s.button} type="button" onClick={cbOnRemove}>
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
};

export default ContactListItem;
