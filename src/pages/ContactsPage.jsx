import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getContacts } from "../redux/contacts/contactsThunk";
import {
  contactsErrorSelector,
  contactsIsLoadingSelector,
  tokenSelector,
} from "../redux/selectors";
import Notiflix from "notiflix";

const ContactsPage = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const isLoading = useSelector(contactsIsLoadingSelector);
  const error = useSelector(contactsErrorSelector);
  const errorShow = () => {
    Notiflix.Notify.failure(error.message);
  };
  useEffect(() => {
    dispatch(getContacts(token));
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && errorShow()}
      <section>{children}</section>
    </>
  );
};

export default ContactsPage;
