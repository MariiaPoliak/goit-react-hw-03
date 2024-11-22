import PropTypes from "prop-types";
import styles from "./Contact.module.css";

function Contact({ contact, onDeleteContact }) {
  return (
    <div className={styles.contact_box}>
      <li className={styles.contact_item}>
        {contact.name}: {contact.number}
        <button
          className={styles.button}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
