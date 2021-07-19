import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDogs} from '../../../store/dogs'
import Slide from './Slide'
import styles from '../../../css-modules/DogCarousel.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

function DogCarousel(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    console.log('USER info from dog carousel component', user.id)
    
    useEffect(() => {
        dispatch(getDogs(user.id));
    }, [])
    
    // const doggos = useSelector(state => state.session.dogs);
    // console.log('HOpefully an array of dogs:', doggos)

    // const slides = [];
    // let i = 0
    // doggos.forEach((doggo) => {
    //     slides.push(
    //         <SwiperSlide key={`slide-${i}`}>
    //             <Slide dog={doggo}/>
    //         </SwiperSlide>
    //     )
    //     i++
    // })

    // if (doggos) {   
    //     return (
    //         <>
    //         <p>DOGGO carousel</p>
    //         <div className={styles.dogCarousel}>
    //             <Swiper id="main" 
    //                 tag="section" 
    //                 wrapperTag="ul" 
    //                 className={styles.swiperContainer}
    //                 navigation 
    //                 pagination 
    //                 spaceBetween={0} 
    //                 slidesPerView={3}
    //                 // onInit={(swiper) => console.log('Swiper initialized', swiper)}
    //                 // onSlideChange={(swiper) => {
    //                 //     console.log('Swiper slide: ', swiper)
    //                 // }}
    //                 // onReachEnd={() => console.log("Swiper end")}
    //             >{slides}</Swiper>
    //         </div>
    //         </>
    //     )
    // } else {
        return (
            <p>No doggos :(</p>
        )
    // }
}


export default DogCarousel;