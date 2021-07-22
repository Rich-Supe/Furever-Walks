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
                <p>DOGGO carousel</p>
                <div className={styles.dogCarousel}>
                <Swiper id="main" 
                    tag="section" 
                    wrapperTag="ul" 
                    className={styles.swiperContainer}
                    navigation 
                    pagination 
                    spaceBetween={0} 
                    slidesPerView={5}
                    // onInit={(swiper) => console.log('Swiper initialized', swiper)}
                    // onSlideChange={(swiper) => {
                    //     console.log('Swiper slide: ', swiper)
                    // }}
                    // onReachEnd={() => console.log("Swiper end")}
                >{slides}</Swiper>
                </div>
                <AddDogModal />
            </>
        )
    } else {
        return (
            <p>No doggos :(</p>
        )
    }
}


export default DogCarousel;