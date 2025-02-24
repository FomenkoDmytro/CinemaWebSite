import { Field, Form, Formik } from "formik";
import styles from "./ResetPasswordForm.module.scss";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = () => {
    alert("ok");
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={`${styles.title} text-primary-blue`}>
        Відновлення паролю
      </h1>
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

            <button type="submit" className="button">
              Відновити пароль
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
          Створити аккаунт?{" "}
          <span
            className={`${styles.link} link`}
            onClick={() => handleNavigate("/registration")}
          >
            Реєстрація
          </span>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
