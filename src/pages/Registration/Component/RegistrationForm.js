import { Field, Form, Formik } from "formik";
import styles from "./RegistrationForm.module.scss";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^(?:\+38)?0\d{9}$/;
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  const handleSubmit = (values, { setValues }) => {
    alert("OK");
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={`${styles.title} text-primary-blue`}>Реєстрація</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!emailPattern.test(values.email)) {
            errors.email = "Невірна email адреса";
          }

          if (!passwordPattern.test(values.password)) {
            errors.password =
              "Пароль має містити хоча б одну велику літеру, цифру і спеціальний символ!";
          }

          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Паролі не співпадають";
          }

          if (!phonePattern.test(values.phone)) {
            errors.phone = "Невірний формат телефону";
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
                id="password"
                name="password"
                placeholder="Введіть пароль"
                type="password"
              />
              {touched.password && errors.password && (
                <div className={styles.error}>{errors.password}</div>
              )}
            </div>

            <div>
              <Field
                className="input"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Підтвердіть пароль"
                type="password"
              />
              {errors.confirmPassword && (
                <div className={styles.error}>{errors.confirmPassword}</div>
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
            <button type="submit" className="button">
              Зареєструватись
            </button>
          </Form>
        )}
      </Formik>
      <div className={styles.text}>
        <p>
          Вже маєш аккаунт?{" "}
          <span
            className={`${styles.link} link`}
            onClick={() => handleNavigate("/login")}
          >
            Авторизація
          </span>
        </p>
        <p>
          Забув пароль?{" "}
          <span
            className={`${styles.link} link`}
            onClick={() => handleNavigate("/resetpassword")}
          >
            Відновити пароль
          </span>
        </p>
      </div>
    </div>
  );
}

export default Registration;
