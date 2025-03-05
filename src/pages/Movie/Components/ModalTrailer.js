import Modal from "react-bootstrap/Modal";
import styles from "./ModalTrailer.module.scss";

function ModalReturn(props) {
  return (
    <Modal {...props} fullscreen={true} className={styles.modal}>
      <Modal.Header closeButton className={styles.title}>
        <Modal.Title
          className="text-primary-blue"
          id="contained-modal-title-vcenter"
        >
          {props.movieTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <iframe
          className={styles.trailer}
          src="https://www.youtube.com/embed/dIp5T-jstSI?si=7CXDV37bmQ-oHUbt"
          title={`Трейлер ${props.movieTitle}`}
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </Modal.Body>
    </Modal>
  );
}

export default ModalReturn;
