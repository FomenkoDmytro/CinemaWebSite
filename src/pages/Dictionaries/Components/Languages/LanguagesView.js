import { useState } from "react";
import styles from "./LanguagesView.module.scss";
import LanguageModal from "./LanguageModal";

function LanguagesView({ data, onEdit }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mode, setMode] = useState(null);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setMode("edit");
    setModalShow(true);
  };

  const handleAddClick = () => {
    setSelectedItem(null);
    setMode("add");
    setModalShow(true);
  };

  return (
    <>
      <ul className={styles.list}>
        {data.map((lang) => (
          <li key={lang.id}>
            Назва мови:{" "}
            <span className="text-primary-blue text-bold">
              {lang.languageName}{" "}
            </span>
            <button
              className="buttonSmall"
              onClick={() => handleEditClick(lang)}
            >
              Редагувати
            </button>
          </li>
        ))}
      </ul>

      <button className="button" onClick={() => handleAddClick()}>
        Додати нову мову до довідника
      </button>

      <LanguageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={selectedItem}
        mode={mode}
      />
    </>
  );
}

export default LanguagesView;
