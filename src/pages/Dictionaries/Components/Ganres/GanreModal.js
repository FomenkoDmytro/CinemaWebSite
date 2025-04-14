import Modal from "react-bootstrap/Modal";
import GanreModalForm from "./GanreModalForm";

function GanreModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="text-primary-blue"
          id="contained-modal-title-vcenter"
        >
          {props.mode === "edit"
            ? "Коригування элемента в довіднику"
            : "Додавання в довідник нового жанру"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GanreModalForm
          data={props.data}
          mode={props.mode}
          onHide={props.onHide}
        />
      </Modal.Body>
    </Modal>
  );
}

export default GanreModal;
