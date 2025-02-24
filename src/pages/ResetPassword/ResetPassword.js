import ResetPasswordForm from "./Component/ResetPasswordForm";
import styles from "./ResetPassword.module.scss";

function ResetPassword() {
  return (
    <div className={`${styles.formContainer} container`}>
      <ResetPasswordForm />
    </div>
  );
}

export default ResetPassword;
