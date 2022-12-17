import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function OrderCompleteModal() {
  return (
    <div
      className="modal show" //class "sm" for small modal
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title style={{alignItems:'center'}}>Your Order is Confirmed</Modal.Title>
        </Modal.Header>

     
        <Modal.Footer>
          <Button onClick={()=>document.location.reload()} variant="primary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

//Modal