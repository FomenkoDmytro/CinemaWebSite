import RegistrationForm from "./Component/RegistrationForm";
import styles from "./Registration.module.scss";

function Registration() {
  return (
    <div className={`${styles.formContainer} container`}>
      <RegistrationForm />
    </div>
  );
}

export default Registration;
