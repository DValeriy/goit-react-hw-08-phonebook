import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

import { isUserLoginSelector } from "../../../redux/selectors";

const PrivateRoute = ({ children, redirectTo, ...routeProps }) => {
  const isUserLogin = useSelector(isUserLoginSelector);

  return (
    <Route {...routeProps}>
      {isUserLogin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
