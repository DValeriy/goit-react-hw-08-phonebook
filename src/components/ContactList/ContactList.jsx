import s from "./ContactList.module.css";

// import PropTypes from "prop-types";
// import { connect } from "react-redux";

import ContactListItem from "../ContactListItem";
import { useSelector } from "react-redux";
import { filteredContactsSelector } from "../../redux/selectors";

const ContactList = () => {
  //---------------for version without hooks use---------------
  // const ContactList = ({ contacts, filter }) => {
  // const filteredFn = ({ contacts = [], filter = "" }) => {
  //   return filter
  //     ? contacts.filter(({ name }) => {
  //         return name.toLowerCase().includes(filter.toLowerCase());
  //       })
  //     : contacts;
  // };
  // const filteredContacts = filteredFn({ contacts, filter });
  //---------------for version without hooks use---------------

  const filteredContacts = useSelector((state) =>
    filteredContactsSelector(state)
  );
  const markup = filteredContacts.map((item) => {
    return <ContactListItem key={item.id} item={item} />;
  });

  return <ul className={s.list}>{markup}</ul>;
};

//---------------for version without hooks use---------------
// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   filter: PropTypes.string.isRequired,
// };

// const mapStatetoToProps = ({ contacts, filter }) => ({
//   contacts,
//   filter,
// });
// export default connect(mapStatetoToProps, null)(ContactList);
//---------------for version without hooks use---------------

export default ContactList;
