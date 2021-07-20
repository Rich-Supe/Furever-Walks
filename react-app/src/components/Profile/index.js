import styles from '../../css-modules/Profile.module.css'
import UserInfo from './UserInfo';
import DogCarousel from './DogCarousel';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function Profile() {
    const {id} = useParams();

    return (
        <div className={styles.profile}>
            <h1>Profile Page!</h1>
            <UserInfo />
            <DogCarousel userId={id}/>
        </div>

    );
}

export default Profile;