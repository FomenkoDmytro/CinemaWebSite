import Modal from "react-bootstrap/Modal";
import styles from "./Modal.module.scss";
import ModalForm from "./ModalForm";

function ModalFAQ(props) {
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
          Зв'яжіться з нами
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalForm />
      </Modal.Body>
    </Modal>
  );
}

export default ModalFAQ;
