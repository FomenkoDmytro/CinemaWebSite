import { useState } from "react";
import { Pagination } from "react-bootstrap";
import styles from "./AudiencesView.module.scss";
import AudienceModal from "./AudienceModal";
import Fuse from "fuse.js";

function AudiencesView({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mode, setMode] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fuse = new Fuse(data, {
    keys: ["category"],
    threshold: 0.4,
  });

  const filteredAudience =
    search.trim() === ""
      ? data
      : fuse.search(search).map((result) => result.item);

  const paginatedData = filteredAudience.slice(
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

  const totalPages = Math.ceil(filteredAudience.length / itemsPerPage);

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
          placeholder="Пошук категорії аудиторії"
          className="input"
        />
      </div>
      <ul className={styles.list}>
        {paginatedData.map((cat) => (
          <li key={cat.id}>
            Назва категорії аудиторії:{" "}
            <span className="text-primary-blue text-bold">{cat.category} </span>
            <button
              className="buttonSmall"
              onClick={() => handleEditClick(cat)}
            >
              Редагувати
            </button>
          </li>
        ))}
      </ul>

      <Pagination className={styles.pagination}>{items}</Pagination>

      <button className="button" onClick={() => handleAddClick()}>
        Додати нову категорію аудиторії до довідника
      </button>

      <AudienceModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={selectedItem}
        mode={mode}
      />
    </>
  );
}

export default AudiencesView;
