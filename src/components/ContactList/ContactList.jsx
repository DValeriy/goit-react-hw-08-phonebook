import s from "./ContactList.module.css";

import ContactListItem from "../ContactListItem";
import { useSelector } from "react-redux";
import { filteredContactsSelector } from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector((state) =>
    filteredContactsSelector(state)
  );
  const markup = filteredContacts.map((item) => {
    return <ContactListItem key={item.id} item={item} />;
  });

  return <ul className={s.list}>{markup}</ul>;
};

export default ContactList;
