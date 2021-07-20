import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import AddDog from './AddDog';

function AddDogModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Add a Dog</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddDog setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default AddDogModal;