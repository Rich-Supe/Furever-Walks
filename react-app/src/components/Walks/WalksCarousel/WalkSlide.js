import { getWalksUser } from '../../../store/walks';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from '../../../css-modules/WalkSlide.module.css';

function WalkSlide({ walk }) {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(()=> {
        dispatch(getWalksUser(id))
    }, [dispatch])

    // const walks = useSelector((state) => state.walks)
    // const userWalks = Object.values(walks).filter((value) => value.user_id == id)
    // console.log('WALKS CAROUSEL USER WALKS VAR', userWalks)
    // returns array of walk objects

    return (
        <div className={styles.walkSlide}>
            <ul>
                <li key={walk.id}>
                    <div>NAME: {walk.name}</div>
                    <div>DATE: {walk.date.slice(0, 12)}</div>
                    <div>DISTANCE: {walk.distance} mi</div>
                    <div>DURATION: {walk.duration} mins</div>
                    <div>RATING: {walk.rating}</div>
                    <div>STATUS: {walk.finished ? 'Completed': 'Planned'}</div>
                </li>
            </ul>
        </div>
    )
}

export default WalkSlide;