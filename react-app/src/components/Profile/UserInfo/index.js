import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import EditUserModal from './EditUserModal';

import styles from '../../../css-modules/UserProfile.module.css';
import img_url from '../../../assets/img/default-user-profile-icon.png'

function UserProfile(){
    const user = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);



    return (
        <div className={styles.userProfile}>
            <h1>User Profile</h1>
            <img src={img_url} />
            <ul>    
                <li>Name: {user?.name}</li>
                <li>Username: {user?.username}</li>
                <li>Bio: {user?.bio}</li>
                <li>Email: {user?.email}</li>
                <li>Total Distance: {user?.user_total_distance}</li>
                <li>Total Duration: {user?.user_total_duration}</li>
                <li>Total Walks: {user?.user_total_walks}</li>
            </ul>
            <button onClick={() => setShowModal(true)}>Edit Profile</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditUserModal setShowModal={setShowModal} />
                </Modal>
            )}
        </div>
    )
}

export default UserProfile;