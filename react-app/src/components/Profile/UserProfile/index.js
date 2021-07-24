import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditUserForm from './EditUserForm';

import styles from '../../../css-modules/UserProfile.module.css';
import img_url from '../../../assets/img/default-user-profile-icon.png'

function UserProfile(){
    const user = useSelector(state => state.session.user);
    const [showForm, setShowForm] = useState(false);

    return (
        <div className={styles.userProfile}>
            <h2>Welcome, {user?.name}!</h2>
            <img src={img_url} alt='default_image'/>
            {showForm ? (
                <>
                    <EditUserForm setShowForm={setShowForm} />
                </>
            ) : (
                <ul>
                    <li>USERNAME: {user?.username}</li>
                    <li>EMAIL: {user?.email}</li>
                    <li>BIO: {user?.bio}</li>
                    <li>TOTAL DISTANCE: {user?.user_total_distance}</li>
                    <li>TOTAL DURATION: {user?.user_total_duration}</li>
                </ul>
            )}
            {!showForm && 
                <button onClick={() => setShowForm(true)}>EDIT PROFILE</button>
            }
        </div>
    )
}

export default UserProfile;