import { useState } from "react";
import { Pagination } from "react-bootstrap";
import styles from "./LanguagesView.module.scss";
import LanguageModal from "./LanguageModal";

function LanguagesView({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mode, setMode] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredLanguage = data.filter((lang) =>
    lang.languageName.toUpperCase().includes(search.toUpperCase())
  );

  const paginatedData = filteredLanguage.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredLanguage.length / itemsPerPage);

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Пошук мови"
          className="input"
        />
      </div>
      <ul className={styles.list}>
        {paginatedData.map((lang) => (
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

      <Pagination className={styles.pagination}>{items}</Pagination>

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
