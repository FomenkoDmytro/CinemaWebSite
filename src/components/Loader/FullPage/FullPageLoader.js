import { DotLoader } from "react-spinners";
import styles from "./FullPageLoader.module.scss";

function FullPageLoader() {
  return (
    <div className={styles.loaderContainer}>
      <DotLoader color="#2563eb" size={120} />
    </div>
  );
}

export default FullPageLoader;
