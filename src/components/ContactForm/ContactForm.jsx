import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be 15 characters or less")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d+$/, "Number must contain only digits")
    .required("Number is required"),
});

function ContactForm({ onAddContact }) {
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <div className={styles.formContainer}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <Field
              type="text"
              name="name"
              className={`${styles.input} ${
                errors.name && touched.name ? styles.inputError : ""
              }`}
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.formContainer}>
            <label className={styles.label} htmlFor="number">
              Number
            </label>
            <Field
              type="text"
              name="number"
              className={`${styles.input} ${
                errors.number && touched.number ? styles.inputError : ""
              }`}
              placeholder="Number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.button}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
