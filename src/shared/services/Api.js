import axios from "axios";

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
  const { data } = await axios.post("/users/signup", user);
  token.set(data.token);
  return data;
};

export const loginUserApi = async (user) => {
  const { data } = await axios.post("/users/login", user);
  token.set(data.token);
  return data;
};

export const logoutUserApi = async () => {
  const { data } = await axios.post("/users/logout");
  token.unset();
  return;
};

export const currentUserApi = async (tokenFromLS) => {
  token.set(tokenFromLS);
  const { data } = await axios.get("/users/current");
  return data;
};

export const getContactsApi = async (tokenFromRS) => {
  // axios.defaults.headers.common["Authorization"] = token;
  token.set(tokenFromRS);
  const { data } = await axios.get("/contacts");
  return data;
};

export const addContactsApi = async (contact, tokenFromRS) => {
  token.set(tokenFromRS);
  const { data } = await axios.post("/contacts", contact);
  return data;
};

export const removeContactsApi = async (contactId, tokenFromRS) => {
  token.set(tokenFromRS);
  const data = await axios.delete(`/contacts/${contactId}`);
  return contactId;
};
