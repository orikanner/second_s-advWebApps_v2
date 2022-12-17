import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
export default function OrderCompleteModal({toggleModal,topModal}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        toggleModal(!topModal)
        localStorage.clear();
        document.location.reload();
    };
    console.log(topModal);
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={topModal} onHide={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Order Comlete</Modal.Title>
          </Modal.Header>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Close
            </Button>
          
          </Modal.Footer>
        </Modal>
      </>
  );
}

//Modal