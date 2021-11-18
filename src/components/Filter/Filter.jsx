import s from "./Filter.module.css";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
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

//---------------for version without hooks use---------------
// const Filter = ({ changeFilter, filter }) => {}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };

// const mapStatetoToProps = ({ filter }) => ({
//   filter,
// });
// const mapDispatchToProps = (dispatch) => ({
//   changeFilter: (value) => dispatch(changeFilter(value)),
// });

// export default connect(mapStatetoToProps, mapDispatchToProps)(Filter);
//---------------for version without hooks use---------------

export default Filter;
