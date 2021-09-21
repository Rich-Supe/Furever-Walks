import React, { useState, useEffect } from 'react';
import { Modal } from '../../../context/Modal';
import DogProfile from './DogProfile';
import styles from '../../../css-modules/DogProfile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setModal, setDogModalId } from '../../../store/modals';

function DogProfileModal({ dog }) {
    const modalStatus = useSelector(state => state.modals.status)
    const dogModalNum = useSelector(state => state.modals.dogId)
    const [showModal, setShowModal] = useState(modalStatus);
    const dogImageURL = dog.image_url
    const dispatch = useDispatch();

    useEffect(() => {
        setShowModal(modalStatus)
    }, [modalStatus])

    const openModal = () => {
        dispatch(setModal(true))
        dispatch(setDogModalId(dog.id))
    }

    const closeModal = () => {
        dispatch(setModal(false))
    }

    return (
        <div className={styles.dogProfileModal}>
            <h3 className={styles.dogName}>
                {dog.name}
            </h3>
            <img
                src={dogImageURL}
                alt='DogProfileImage'
                className={styles.dogProfileImage}
                onClick={openModal}
            />
            {showModal && (
                <>
                    {dogModalNum === dog.id && (
                        <Modal onClose={closeModal}>
                            <DogProfile dog={dog} setShowModal={setShowModal} />
                        </Modal>
                    )}
                </>
            )}
        </div>
    )
}

export default DogProfileModal;
