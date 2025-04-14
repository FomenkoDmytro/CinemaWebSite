import { useState } from "react";
import { Pagination } from "react-bootstrap";
import styles from "./ProducersView.module.scss";
import ProducerModal from "./ProducerModal";
import Fuse from "fuse.js";

function ProducersView({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mode, setMode] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fuse = new Fuse(data, {
    keys: ["firstName", "lastName"],
    threshold: 0.4,
  });

  const filteredProducer =
    search.trim() === ""
      ? data
      : fuse.search(search).map((result) => result.item);

  const paginatedData = filteredProducer.slice(
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

  const totalPages = Math.ceil(filteredProducer.length / itemsPerPage);

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
          placeholder="Пошук продюсера"
          className="input"
        />
      </div>
      <ul className={styles.list}>
        {paginatedData.map((prod) => (
          <li key={prod.id}>
            Ім'я:{" "}
            <span className="text-primary-blue text-bold">
              {prod.firstName}{" "}
            </span>
            Призвище:{" "}
            <span className="text-primary-blue text-bold">
              {prod.lastName}{" "}
            </span>
            <button
              className="buttonSmall"
              onClick={() => handleEditClick(prod)}
            >
              Редагувати
            </button>
          </li>
        ))}
      </ul>

      <Pagination className={styles.pagination}>{items}</Pagination>

      <button className="button" onClick={() => handleAddClick()}>
        Додати нового продюсера до довідника
      </button>

      <ProducerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={selectedItem}
        mode={mode}
      />
    </>
  );
}

export default ProducersView;
