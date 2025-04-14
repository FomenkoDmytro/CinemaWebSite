import { useState } from "react";
import { Pagination } from "react-bootstrap";
import styles from "./GanresView.module.scss";
import GanreModal from "./GanreModal";
import Fuse from "fuse.js";

function GanresView({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mode, setMode] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fuse = new Fuse(data, {
    keys: ["name"],
    threshold: 0.4,
  });

  const filteredGanre =
    search.trim() === ""
      ? data
      : fuse.search(search).map((result) => result.item);

  const paginatedData = filteredGanre.slice(
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

  const totalPages = Math.ceil(filteredGanre.length / itemsPerPage);

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
          placeholder="Пошук жанру"
          className="input"
        />
      </div>
      <ul className={styles.list}>
        {paginatedData.map((ganr) => (
          <li key={ganr.id}>
            Назва жанру:{" "}
            <span className="text-primary-blue text-bold">{ganr.name} </span>
            <button
              className="buttonSmall"
              onClick={() => handleEditClick(ganr)}
            >
              Редагувати
            </button>
          </li>
        ))}
      </ul>

      <Pagination className={styles.pagination}>{items}</Pagination>

      <button className="button" onClick={() => handleAddClick()}>
        Додати новий жанр до довідника
      </button>

      <GanreModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={selectedItem}
        mode={mode}
      />
    </>
  );
}

export default GanresView;
