import { Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import RegisterPage from "./../../pages/RegisterPage";
import LoginPage from "./../../pages/LoginPage";
import ContactsPage from "./../../pages/ContactsPage";

import RegLogForm from "../../shared/components/Forms/RegLogForm";
import ContactForm from "../../shared/components/Forms/ContactForm";
import ContactList from "../../shared/components/ContactList";
import Filter from "../../shared/components/Filter";

const Router = () => {
  return (
    <Switch>
      <PublicRoute path="/login" redirectTo="/contacts" exact>
        <LoginPage>
          <RegLogForm islogin={true} />
        </LoginPage>
      </PublicRoute>

      <PublicRoute path="/register" redirectTo="/contacts" exact>
        <RegisterPage>
          <RegLogForm islogin={false} />
        </RegisterPage>
      </PublicRoute>

      <PrivateRoute path="/contacts" redirectTo="/login" exact>
        <ContactsPage>
          <ContactForm />
          <Filter />
          <ContactList />
        </ContactsPage>
      </PrivateRoute>
    </Switch>
  );
};

export default Router;
