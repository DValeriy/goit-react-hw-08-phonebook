import axios from "axios";
export const getContactsApi = async () => {
  try {
    axios.defaults.baseURL = "http://localhost:4040/";
    const { contacts } = await axios.get("/contacts");
    return contacts;
  } catch (err) {
    // Promise.reject(err.massage);
    throw new Error(err.massage);
  }
};
export const addContactsApi = async (contactForApi) => {
  try {
    axios.defaults.baseURL = "http://localhost:4040/";
    const { contact } = await axios.post("/contacts", { ...contactForApi });

    return contact;
  } catch (err) {
    // Promise.reject(err.massage);
    throw new Error(err.massage);
  }
};
export const removeContactsApi = async ({ id, contacts }) => {
  const indexForApi = contacts.findIndex((item) => item.id === id);
  try {
    axios.defaults.baseURL = "http://localhost:4040/";
    const { index } = await axios.delete("/contacts/" + indexForApi);
    return index;
  } catch (err) {
    // Promise.reject(err.massage);
    throw new Error(err.massage);
  }
};
