import styles from "./FAQ.module.scss";
import AccordionFAQ from "./Components/AccordionFAQ.js";
import ModalFAQ from "./Components/ModalFAQ.js";
import { useState } from "react";

function FAQ() {
  const [modalShow, setModalShow] = useState(false);

  const handleClick = () => {
    setModalShow(true);
  };

  return (
    <div className={`${styles.container} container`}>
      <h2 className={`${styles.title} text-primary-blue`}>Поширені питання</h2>

      <AccordionFAQ />

      <div className={styles.extraQuestion}>
        <p>Не знайшов відповідь на своє питання?</p>
        <button className="button" type="button" onClick={handleClick}>
          Задати питання
        </button>
      </div>
      <ModalFAQ show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default FAQ;
