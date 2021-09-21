import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SignupForm from './SignupForm';
import styles from '../../../css-modules/SignupForm.module.css';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>SIGN UP</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} className={styles.modal}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;