import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import DemoForm from './DemoForm';

function DemoFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>DEMO</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DemoForm />
        </Modal>
      )}
    </>
  );
}

export default DemoFormModal;