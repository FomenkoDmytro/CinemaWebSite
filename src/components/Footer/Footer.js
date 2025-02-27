import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Footer.module.scss";

function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <span onClick={() => handleNavigate("/")}>
                <img
                  src={require("../../assets/images/logo.png")}
                  alt="Логотип кінотеатру"
                />
              </span>
            </div>
            <ul className={styles.menu}>
              <li>
                <span
                  className={styles.link}
                  onClick={() => handleNavigate("/")}
                >
                  Зараз у кіно
                </span>
              </li>
              <li>
                <span
                  className={styles.link}
                  onClick={() => handleNavigate("/soon")}
                >
                  Скоро у кіно
                </span>
              </li>
              <li>
                <span
                  className={styles.link}
                  onClick={() => handleNavigate("/purchaseandreturn")}
                >
                  Покупка та повернення квитків
                </span>
              </li>
              <li>
                <span
                  className={styles.link}
                  onClick={() => handleNavigate("/faq")}
                >
                  Служба підтримки
                </span>
              </li>
              <li>
                <span
                  className={styles.link}
                  onClick={() => handleNavigate("/about")}
                >
                  Про компанію
                </span>
              </li>
            </ul>
          </nav>
          <address className={styles.address}>
            <div className={styles.addressContacts}>
              <ul className={styles.addressList}>
                <li>
                  <a className={`${styles.link} link`} href="tel:+380951234567">
                    +38 (095) 123-45-67
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles.link} link`}
                    href="mailto:epicvision@gmail.com"
                  >
                    EpicVision@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles.link} link`}
                    href="https://maps.app.goo.gl/zUkGo392BeuX52wy8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Україна, м. Київ, вул. Хрещатик 25
                  </a>
                </li>
              </ul>
              <div className={styles.icon}>
                <a href="#">
                  <Icon
                    icon="icon-facebook"
                    className={styles.addressIcon}
                    w="42"
                    h="42"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="icon-instagram"
                    className={styles.addressIcon}
                    w="42"
                    h="42"
                  />
                </a>
              </div>
            </div>
            <div className={styles.copyrightTerms}>
              <p
                className={styles.link}
                onClick={() => handleNavigate("/policy")}
              >
                Політика конфіденційності
              </p>
              <p className={styles.copyright}>&copy; 2025. Дані захищені.</p>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
