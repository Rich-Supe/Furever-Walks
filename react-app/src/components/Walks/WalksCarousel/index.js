import { getWalksUser } from '../../../store/walks';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import WalkSlide from './WalkSlide';
import styles from '../../../css-modules/WalksCarousel.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

function WalksCarousel(){
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(()=> {
        dispatch(getWalksUser(id))
    }, [dispatch])

    const walks = useSelector((state) => Object.values(state.walks))
    console.log('WALKS FROM STORE', walks)
    const userWalks = walks.filter((walk) => walk.user_id == id)
    console.log('WALKS CAROUSEL USER WALKS VAR', userWalks)
    // returns array of walk objects
    userWalks?.forEach((obj) => {
        console.log('LINE 27-----------', obj)
    })

    const slides =[];
    let i = 0;
    userWalks?.forEach((obj) => {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <WalkSlide walk={obj} />
                {/* <WalkSlide walk={obj} />
                <WalkSlide walk={obj} />
                <WalkSlide walk={obj} />
                <WalkSlide walk={obj} /> */}
            </SwiperSlide>
        )
        i++
    })

    if (userWalks){
        return (
            <>
                <div>
                    <h1>Walk Carousel</h1>
                    <Swiper id="mainWalk"
                        tag="section"
                        wrapperTag="ul"
                        className={styles.swiperContainer}
                        navigation
                        pagination
                        spaceBetween={0}
                        slidesPerView={8}
                        slidesPerColumn={2}
                        // pagination={{ clickable: true }}
                        // slidesPerColumn={5}
                    >
                        {slides}
                        {/* {userWalks?.forEach((obj) => {
                            <SwiperSlide>
                                <WalkSlide walk={obj} />
                            </SwiperSlide>
                        })} */}
                    </Swiper>
                </div>
            </>
        )
    } else {
        return (
            <h1>No Walks</h1>
        )
    }
}

export default WalksCarousel;