import styles from '../../css-modules/Profile.module.css'
import UserProfile from './UserProfile';
import DogCarousel from './DogCarousel';
import Graph from './Graph';
import { useParams } from 'react-router-dom';


function Profile() {
    const {id} = useParams();

    return (
        <div className={styles.profile}>
            <div className={styles.userProfileContainer}>
                <UserProfile />
            </div>
            {/* <div className={styles.right}> */}
                <div className={styles.graphContainer}>
                    <Graph />
                </div>
                <div className={styles.dogCarouselContainer}>
                    <DogCarousel userId={id}/>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Profile;