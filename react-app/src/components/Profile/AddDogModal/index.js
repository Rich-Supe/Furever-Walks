import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import AddDog from './AddDog';
import styles from '../../../css-modules/AddDogModal.module.css'

function AddDogModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className={styles.addDogBtn} onClick={() => setShowModal(true)}>ADD A DOG</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddDog setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default AddDogModal;