import Modal from "react-bootstrap/Modal";
import ReturnForm from "./ReturnForm";

function ModalReturn(props) {
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
          Повернення квитків
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReturnForm />
      </Modal.Body>
    </Modal>
  );
}

export default ModalReturn;
