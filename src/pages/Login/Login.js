import LoginForm from "./Component/LoginForm";
import styles from "./Login.module.scss";

function Login() {
  return (
    <div className={`${styles.formContainer} container`}>
      <LoginForm />
    </div>
  );
}

export default Login;
