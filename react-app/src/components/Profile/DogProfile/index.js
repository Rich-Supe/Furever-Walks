import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import DogProfile from './DogProfile';
import styles from '../../../css-modules/DogProfile.module.css';

function DogProfileModal({dog, setShowModal, showModal}) {
    // const [showModal, setShowModal] = useState(false);
    // console.log(dog)
    const dogImageURL = dog.image_url
    console.log(dogImageURL)

    const closeThenOpenModals = () => {
        setShowModal(false)
        setShowModal(true)
    }

    return (
        <div className={styles.dogProfileModal}>
            {dog.name}  
            <img
                src={dogImageURL}
                alt='DogProfileImage'
                className={styles.dogProfileImage}
                onClick={closeThenOpenModals}
            />
            {/* <button onClick={() => setShowModal(true)}>{dog.name}'s' Profile</button> */}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DogProfile setShowModal={setShowModal} dog={dog}/>
                </Modal>
            )}
        </div>
    )
}

export default DogProfileModal;
