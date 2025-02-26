import { Form, Field, Formik } from "formik";
import styles from "./ReturnForm.module.scss";
import { useNavigate } from "react-router-dom";

function ReturnForm() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^(?:\+38)?0\d{9}$/;

  const handleSubmit = (values, { setValues }) => {
    alert("OK");
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
          date: "",
          movie: "",
          comments: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!emailPattern.test(values.email)) {
            errors.email = "Невірна email адреса";
          }

          if (values.name.length < 4) {
            errors.name = "Ім'я повинно бути більше трьох символів";
          }

          if (values.name.length > 20) {
            errors.name = "Ім'я повинно бути до 20 символів";
          }

          if (!phonePattern.test(values.phone)) {
            errors.phone = "Невірний формат телефону";
          }

          if (!values.date) {
            errors.date = "Оберіть дату сеансу";
          }

          if (values.movie.length < 4) {
            errors.movie = "Занадто коротка назва фільму та час сеансу";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div>
              <Field
                className="input"
                id="email"
                name="email"
                placeholder="Введіть Ваш email"
                type="email"
              />
              {touched.email && errors.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </div>

            <div>
              <Field
                className="input"
                id="name"
                name="name"
                placeholder="Як до Вас звертатись"
                type="text"
              />
              {touched.name && errors.name && (
                <div className={styles.error}>{errors.name}</div>
              )}
            </div>

            <div>
              <Field
                className="input"
                id="phone"
                name="phone"
                placeholder="Введіть номер телефону в форматі +380951234567"
                pattern="^(?:\+38)?0\d{9}$"
                type="tel"
              />
              {touched.phone && errors.phone && (
                <div className={styles.error}>{errors.phone}</div>
              )}
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="date" className={styles.label}>
                Дата сеансу
              </label>
              <Field className="input" id="date" name="date" type="date" />
              {touched.date && errors.date && (
                <div className={styles.error}>{errors.date}</div>
              )}
            </div>

            <div>
              <Field
                className="input"
                id="movie"
                name="movie"
                placeholder="Введіть назву фільма та час сенсу"
              />
              {touched.date && errors.movie && (
                <div className={styles.error}>{errors.movie}</div>
              )}
            </div>

            <div>
              <Field
                className={`${styles.textArea} input`}
                id="comments"
                name="comments"
                placeholder="Додаткові коментарі"
                as="textarea"
              />
            </div>

            <button type="submit" className="button">
              Надіслати
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ReturnForm;
