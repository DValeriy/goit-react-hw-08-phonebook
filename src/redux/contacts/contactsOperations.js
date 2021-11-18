import {
  getContactsApi,
  addContactsApi,
  removeContactsApi,
} from "../../services/api";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsActions";

export const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest());

  getContactsApi()
    .then((contacts) => {
      console.log(contacts);
      return dispatch(getContactsSuccess(contacts));
    })
    .catch((err) => dispatch(getContactsError(err.message)));
};

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());

  addContactsApi(contact)
    .then((contact) => dispatch(addContactSuccess(contact)))
    .catch((err) => dispatch(addContactError(err.message)));
};

export const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());

  removeContactsApi(id)
    .then((id) => dispatch(removeContactSuccess(id)))
    .catch((err) => dispatch(removeContactError(err.message)));
};
