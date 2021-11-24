import s from "./Navigation.module.css";

import { useSelector } from "react-redux";

import { isUserLoginSelector } from "../../redux/selectors";

import UserMenu from "./UserMenu";
import LogRegMenu from "./LogRegMenu";

const Navigation = () => {
  const isUserLogin = useSelector(isUserLoginSelector);
  return (
    <nav className={s.nav}>{isUserLogin ? <UserMenu /> : <LogRegMenu />}</nav>
  );
};

export default Navigation;
