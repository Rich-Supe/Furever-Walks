import { getWalksUser } from '../../../store/walks';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
        <div>
            <ol className="swiper-slide">
                {/* {userWalks.map((walk) =>  */}
                    <li key={walk.id}>
                        <div>Name: {walk.name}</div>
                        <div>Date: {walk.date}</div>
                        <div>Distance: {walk.distance}</div>
                        <div>Duration: {walk.duration}</div>
                        <div>Rating: {walk.rating}</div>
                        <div>Status: {walk.finished ? 'Completed': 'Planned'}</div>
                    </li>
                {/* )} */}
            </ol>
        </div>
    )
}

export default WalkSlide;