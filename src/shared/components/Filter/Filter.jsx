import s from "./Filter.module.css";

import { useDispatch, useSelector } from "react-redux";

import { filterSelector } from "../../../redux/selectors/selectors";
import { changeFilter } from "../../../redux/filter/filterActions";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  const handleFilter = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };
  return (
    <div className={s.block}>
      <p className={s.p}>Find contacts by name</p>
      <input
        className={s.p}
        type="text"
        name="filterWord"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
