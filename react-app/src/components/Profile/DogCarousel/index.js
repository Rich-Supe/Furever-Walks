import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDogs} from '../../../store/dogs'
import Slide from './Slide'
import AddDogModal from '../AddDogModal'
import styles from '../../../css-modules/DogCarousel.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

function DogCarousel({userId}){
    const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user);

    
    useEffect(() => {
        dispatch(getDogs(userId));
    }, [dispatch])
    
    const doggos = useSelector((state) => Object.values(state.dogs));

    const slides = [];
    let i = 0
    doggos?.forEach((obj) => {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <Slide dog={obj}/>
            </SwiperSlide>
        )
        i++
    })

    if (doggos) {   
        return (
            <>
                <div className={styles.dogCarousel}>
                    <h1 className={styles.h1}>MY DOGS <AddDogModal /></h1>
                    <Swiper id="main"
                        // className={styles.swiper}
                        tag="section" 
                        wrapperTag="ul" 
                        className={styles.swiperContainer}
                        navigation 
                        pagination 
                        spaceBetween={0} 
                        slidesPerView={3}
                    >{slides}</Swiper>
                </div>
            </>
        )
    } else {
        return (
            <h1>No doggos :(, Please add some!</h1>
        )
    }
}


export default DogCarousel;