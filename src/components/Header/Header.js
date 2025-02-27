import styles from "./Header.module.scss";
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
                Зараз у кіно
              </li>
              <li
                className={styles.link}
                onClick={() => handleNavigate("/soon")}
              >
                Скоро у кіно
              </li>
              <li
                className={styles.link}
                onClick={() => handleNavigate("/purchaseandreturn")}
              >
                Покупка та повернення квитків
              </li>
              <li
                className={styles.link}
                onClick={() => handleNavigate("/faq")}
              >
                Служба підтримки
              </li>
              <li
                className={styles.link}
                onClick={() => handleNavigate("/about")}
              >
                Про компанію
              </li>
            </ul>
            <span
              className={styles.link}
              onClick={() => handleNavigate("/login")}
            >
              Особистий кабінет
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
