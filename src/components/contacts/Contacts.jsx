import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { toast } from "react-toastify";

export const Contacts = () => {

  const notify = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    });
  };

  const [modalIsOpen, toggleModal] = useState(false);

  return (
    <>
      <h1>Contacts</h1>
      <button className="btn btn-success" onClick={notify}>Toast</button> <span>&nbsp;</span> 
      <button className="btn btn-primary" onClick={() => toggleModal(true)}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        className="modal-content modal-lg"
        overlayClassName="modal-overlay"
      >
        <div className="modal-body">
          <h2>Hello</h2>
          <div>I am a modal</div>
          <form className="mt-4">
            <input type="text" placeholder="username" required />
            <br /><br />            
            <button onClick={() => toggleModal(false)}>close</button>
          </form>
        </div>
      </Modal>

    </>
  )
}

export default Contacts