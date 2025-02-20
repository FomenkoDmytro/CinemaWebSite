import styles from "./Header.module.scss";
import "../../styles/_Button.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContainer}>
          <nav className={styles.nav}>
            <a href="/">Logo{/* <img>logo</img> */}</a>
            <ul className={styles.menu}>
              <li>Products</li>
              <li>Solutions</li>
              <li>Services</li>
              <li>Help Center</li>
              <li>Про компанію</li>
            </ul>
            <button className="button">Залогінитись</button>
            {/* it's shouldn't be button */}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
