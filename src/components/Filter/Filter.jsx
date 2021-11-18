import s from "./Filter.module.css";
import { changeFilter } from "../../redux/filter/filterActions";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../redux/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => filterSelector(state));
  const handleFilter = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };
  return (
    <div className={s.input}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filterWord"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
