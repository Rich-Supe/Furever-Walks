import styles from '../../css-modules/Profile.module.css'
import UserProfile from './UserProfile';
import DogCarousel from './DogCarousel';
import AddDogModal from './AddDogModal';
// import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function Profile() {
    const {id} = useParams();

    return (
        <div className={styles.profile}>
            {/* <h1>Profile Page!</h1> */}
            <UserProfile className={styles.userProfileContainer} />
            <DogCarousel className={styles.dogCarouselContainer} userId={id}/>
            <AddDogModal />
        </div>

    );
}

export default Profile;