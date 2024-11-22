import Contact from "../Contact/Contact";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <ul className={styles.contact_box}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
