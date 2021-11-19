import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsReducers";
import { filterReducer } from "./filter/filterReducer";
import errorReducer from "./error/errorReducers";
import loaderReducer from "./loader/loaderReducer";

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  isError: errorReducer,
  isLoading: loaderReducer,
});

export default reducer;
