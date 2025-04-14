import { useState } from "react";
import { Pagination } from "react-bootstrap";
import styles from "./DurationUnitsView.module.scss";
import DurationUnitModal from "./DurationUnitModal";
import Fuse from "fuse.js";

function DurationUnitsView({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mode, setMode] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fuse = new Fuse(data, {
    keys: ["fullName", "shortName"],
    threshold: 0.4,
  });

  const filteredDurationUnit =
    search.trim() === ""
      ? data
      : fuse.search(search).map((result) => result.item);

  const paginatedData = filteredDurationUnit.slice(
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

  const totalPages = Math.ceil(filteredDurationUnit.length / itemsPerPage);

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
          placeholder="Пошук одиниці виміру часу"
          className="input"
        />
      </div>
      <ul className={styles.list}>
        {paginatedData.map((uD) => (
          <li key={uD.id}>
            Назва оидиниці виміру часу:{" "}
            <span className="text-primary-blue text-bold">{uD.fullName} </span>
            Скорочення:{" "}
            <span className="text-primary-blue text-bold">{uD.shortName} </span>
            <button className="buttonSmall" onClick={() => handleEditClick(uD)}>
              Редагувати
            </button>
          </li>
        ))}
      </ul>

      <Pagination className={styles.pagination}>{items}</Pagination>

      <button className="button" onClick={() => handleAddClick()}>
        Додати нову одиницю виміру часу до довідника
      </button>

      <DurationUnitModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={selectedItem}
        mode={mode}
      />
    </>
  );
}

export default DurationUnitsView;
