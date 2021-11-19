import axios from "axios";

export const getContactsApi = async () => {
  try {
    // axios.defaults.baseURL = "http://localhost:4040/";
    axios.defaults.baseURL =
      "https://react-learn-3fa24-default-rtdb.firebaseio.com";

    const { data } = await axios.get("/contacts.json");
    const dataArr = Object.entries(data).map(([id, obj]) => ({
      ...obj,
      id,
    }));
    return dataArr;
  } catch (err) {
    throw err;
  }
};

export const addContactsApi = async (contactForApi) => {
  try {
    // axios.defaults.baseURL = "http://localhost:4040/";
    axios.defaults.baseURL =
      "https://react-learn-3fa24-default-rtdb.firebaseio.com";
    const { data } = await axios.post("/contacts.json", contactForApi);

    return { id: data.name, ...contactForApi };
  } catch (err) {
    throw err;
  }
};

export const removeContactsApi = async (id) => {
  try {
    // axios.defaults.baseURL = "http://localhost:4040/";
    axios.defaults.baseURL =
      "https://react-learn-3fa24-default-rtdb.firebaseio.com";
    const response = await axios.delete("/contacts/" + id + ".json");
    return id;
  } catch (err) {
    throw err;
  }
};
