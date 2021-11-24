import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const authUserApi = async (user) => {
  try {
    const { data } = await axios.post("/users/signup", user);
    token.set(data.token);
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return error;
  }
};

export const loginUserApi = async (user) => {
  try {
    const { data } = await axios.post("/users/login", user);
    token.set(data.token);
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return error;
  }
};

export const logoutUserApi = async () => {
  try {
    const { data } = await axios.post("/users/logout");
    token.unset();
    return;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return error;
  }
};

export const currentUserApi = async (tokenFromLS) => {
  try {
    token.set(tokenFromLS);
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return error;
  }
};

export const getContactsApi = async (tokenFromRS) => {
  try {
    token.set(tokenFromRS);
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return error;
  }
};

export const addContactsApi = async (contact, tokenFromRS) => {
  try {
    token.set(tokenFromRS);
    const { data } = await axios.post("/contacts", contact);
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return error;
  }
};

export const removeContactsApi = async (contactId, tokenFromRS) => {
  try {
    token.set(tokenFromRS);
    const data = await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return error;
  }
};
