import { Field, Form, Formik } from "formik";
import styles from "./ModalForm.module.scss";
import { useNavigate } from "react-router-dom";

function ModalForm() {
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
          reason: "",
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

          if (values.reason.length < 20) {
            errors.name = "Причина зверення повинна бути більше 20 символів";
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

            <div>
              <Field
                className={`${styles.textArea} input`}
                id="reason"
                name="reason"
                placeholder="Опишіть причину звернення"
                as="textarea"
              />
              {touched.name && errors.name && (
                <div className={styles.error}>{errors.reason}</div>
              )}
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

export default ModalForm;
