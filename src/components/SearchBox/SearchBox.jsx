import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={styles.search_box}>
      <input
        className={styles.searchInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts"
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
