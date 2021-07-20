import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDogs} from '../../../store/dogs'
import Slide from './Slide'
import styles from '../../../css-modules/DogCarousel.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

function DogCarousel({userId}){
    const dispatch = useDispatch();
    // console.log('USER info from dog carousel component', user)
    // const userId = user.id
    
    useEffect(() => {
        dispatch(getDogs(userId));
    }, [dispatch])
    
    const doggos = useSelector((state) => Object.values(state.dogs));
    let newArr = []
    doggos.forEach(obj => {
        console.log('HOPEFULLY AN OBJECT:', obj.dogs)
        newArr.push(obj.dogs)
    })

    let arrOfDogs = newArr[0]

    const slides = [];
    let i = 0
    arrOfDogs?.forEach((obj) => {
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
                    slidesPerView={2}
                    // onInit={(swiper) => console.log('Swiper initialized', swiper)}
                    // onSlideChange={(swiper) => {
                    //     console.log('Swiper slide: ', swiper)
                    // }}
                    // onReachEnd={() => console.log("Swiper end")}
                >{slides}</Swiper>
            </div>
            </>
        )
    } else {
        return (
            <p>No doggos :(</p>
        )
    }
}


export default DogCarousel;