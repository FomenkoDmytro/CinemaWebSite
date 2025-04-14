import Modal from "react-bootstrap/Modal";
import ProducerModalForm from "./ProducerModalForm";

function ProducerModal(props) {
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
            : "Додавання в довідник нового продюсера"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProducerModalForm
          data={props.data}
          mode={props.mode}
          onHide={props.onHide}
        />
      </Modal.Body>
    </Modal>
  );
}

export default ProducerModal;
