import styles from '../../../css-modules/UserProfile.module.css';

import img_url from '../../../assets/img/default-user-profile-icon.png'

function UserProfile(){


    return (
        <div className={styles.userProfile}>
            <h1>User Profile</h1>
            <img src={img_url}></img>
        </div>
    )
}

export default UserProfile;