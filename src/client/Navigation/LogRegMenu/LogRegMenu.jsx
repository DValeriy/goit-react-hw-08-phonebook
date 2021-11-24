import s from "./LogRegMenu.module.css";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";

const LogRegMenu = () => {
  const dispatch = useDispatch();
  return (
    <ul className={s.ul}>
      <li>
        <NavLink className={s.link} activeClassName={s.active} to="/login">
          Login
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={s.link}
          activeClassName={s.active}
          to="/register"
          exact
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default LogRegMenu;
