import { Field, Form, Formik } from "formik";
import styles from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = () => {
    alert("OK");
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={`${styles.title} text-primary-blue`}>Авторизація</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!emailPattern.test(values.email)) {
            errors.email = "Невірна email адреса";
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

            <Field
              className="input"
              id="password"
              name="password"
              placeholder="Введіть пароль"
              type="password"
            />

            <button type="submit" className="button">
              Увійти
            </button>
          </Form>
        )}
      </Formik>
      <div className={styles.text}>
        <p>
          Створити аккаунт?{" "}
          <span
            className={`${styles.link} link`}
            onClick={() => handleNavigate("/registration")}
          >
            Реєстрація
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

export default LoginForm;
