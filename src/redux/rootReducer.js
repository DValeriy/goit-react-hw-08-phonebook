import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsReducers";
import { filterReducer } from "./filter/filterReducer";

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default reducer;
