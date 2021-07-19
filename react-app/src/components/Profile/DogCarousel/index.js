import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDogs} from '../../../store/dogs'
import Slide from './Slide'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'

function DogCarousel(){
    const userId = useSelector(state => state.session.user.id);
    console.log('USERID', userId)
    
    useEffect(() => {
        dispatch(getDogs(userId));
    }, [])
    
    const doggos = useSelector(state => state.session.dogs);
    console.log('HOpefully an array of dogs:', doggos)

    const slides = [];
    let i = 0
    doggos.forEach((doggo) => {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <Slide dog={doggo}/>
            </SwiperSlide>
        )
        i++
    })

    if (doggos) {   
        return (
            <>
            <p>DOGGO carousel</p>

            </>
        )
    } else {
        return (
            <p>No doggos :(</p>
        )
    }
}


export default DogCarousel;