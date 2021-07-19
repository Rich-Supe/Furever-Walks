import styles from '../../css-modules/Profile.module.css'
import UserInfo from './UserInfo';
import DogCarousel from './DogCarousel';


function Profile() {
    return (
        <div className={styles.profile}>
            <h1>Profile Page!</h1>
            <UserInfo />
            <DogCarousel />
        </div>

    );
}

export default Profile;