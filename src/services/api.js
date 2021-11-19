import axios from "axios";

export const getContactsApi = async () => {
  try {
    axios.defaults.baseURL = "http://localhost:4040/";
    const { data } = await axios.get("/contacts");
    return data;
  } catch (err) {
    throw err;
  }
};

export const addContactsApi = async (contactForApi) => {
  try {
    axios.defaults.baseURL = "http://localhost:4040/";
    const { data } = await axios.post("/contacts", { ...contactForApi });

    return data;
  } catch (err) {
    throw err;
  }
};

export const removeContactsApi = async (id) => {
  try {
    axios.defaults.baseURL = "http://localhost:4040/";
    const response = await axios.delete("/contacts/" + id);
    return id;
  } catch (err) {
    throw err;
  }
};
