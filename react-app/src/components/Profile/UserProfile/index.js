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
            {/* <h1>User Profile</h1> */}
            <img src={img_url} alt='default_image'/>
            {showForm ? (
                <div>
                    <EditUserForm setShowForm={setShowForm} />
                </div>
            ) : (
                <div>
                    <ul>    
                        <li>Name: {user?.name}</li>
                        <li>Username: {user?.username}</li>
                        <li>Bio: {user?.bio}</li>
                        <li>Email: {user?.email}</li>
                        <li>Total Distance: {user?.user_total_distance}</li>
                        <li>Total Duration: {user?.user_total_duration}</li>
                        <li>Total Walks: {user?.user_total_walks}</li>
                    </ul>
                </div>
            )}
            {!showForm && 
                <button onClick={() => setShowForm(true)}>Edit Profile</button>
            }
        </div>
    )
}

export default UserProfile;