import s from "./RegLogForm.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../../../../redux/user/userThunk";

const RegLogForm = ({ islogin = false }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const cbOnSubmit = (e) => {
    e.preventDefault();
    const customer = {
      email,
      password,
    };
    if (islogin) dispatch(userLogin({ ...customer }));
    else dispatch(userRegister({ ...customer, name }));
    // setName("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <form onSubmit={cbOnSubmit} className={s.form}>
      {!islogin && (
        <label className={s.label}>
          Name
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
      )}
      <label className={s.label}>
        Email
        <input
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          required
        />
      </label>
      <label className={s.label}>
        Password
        <input
          onChange={handleChange}
          value={password}
          type="password"
          name="password"
          required
        />
      </label>
      <button className={s.button} type="submit">
        {islogin ? "Login" : "Registration"}
      </button>
    </form>
  );
};

export default RegLogForm;
