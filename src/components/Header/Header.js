import styles from "./Header.module.scss";
import "../../styles/_Button.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContainer}>
          <nav className={styles.nav}>
            <span className={styles.logo} onClick={() => handleNavigate("/")}>
              <img
                src={require("../../assets/images/logo.png")}
                alt="Логотип кінотеатру"
              />
            </span>
            <ul className={styles.menu}>
              <li className={styles.link} onClick={() => handleNavigate("/")}>
                Products
              </li>
              <li className={styles.link} onClick={() => handleNavigate("/")}>
                Solutions
              </li>
              <li className={styles.link} onClick={() => handleNavigate("/")}>
                Services
              </li>
              <li className={styles.link} onClick={() => handleNavigate("/")}>
                Help Center
              </li>
              <li
                className={styles.link}
                onClick={() => handleNavigate("/about")}
              >
                Про компанію
              </li>
            </ul>
            <span className={styles.link} onClick={() => handleNavigate("/")}>
              Особистий кабінет
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
