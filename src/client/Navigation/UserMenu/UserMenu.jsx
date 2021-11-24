import s from "./UserMenu.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  userEmailSelector,
  userNameSelector,
} from "../../../redux/selectors/selectors";
import { userLogout } from "../../../redux/user/userThunk";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(userEmailSelector);
  const userName = useSelector(userNameSelector);

  const cbOnClick = (e) => {
    dispatch(userLogout());
  };

  return (
    <>
      <ul className={s.ul}>
        <li className={s.link}>User Name :{userName}</li>
        <li className={s.link}>User Email :{userEmail}</li>
      </ul>
      <button className={s.button} type="button" onClick={cbOnClick}>
        Left
      </button>
    </>
  );
};

export default UserMenu;
