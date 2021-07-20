import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import DogProfile from './DogProfile';
import styles from '../../../css-modules/DogProfile.module.css';

function DogProfileModal({dog}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Dog Profile</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DogProfile setShowModal={setShowModal} dog={dog}/>
                </Modal>
            )}
        </>
    )
}

export default DogProfileModal;
