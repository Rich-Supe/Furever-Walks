// import {getWalksUser} from '../../../store/walks';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// SwiperCore.use([Navigation, Pagination])

// function WalkInfo(){
//     const dispatch = useDispatch()
//     const { id } = useParams()
//     useEffect(()=> {
//         dispatch(getWalksUser(id))
//     }, [dispatch])
//     const walks = useSelector((state) => state.walks)
//     const userWalks = Object.values(walks).filter((value) => value.user_id == id)
//         if (userWalks.length > 0){
//             return (
//                 <div>
//                     <h1>Walk info</h1>
//                     <Swiper id="main1"
//                         tag="section"
//                         wrapperTag="ul"
//                         // className={styles.swiperContainer}
//                         pagination={{ clickable: true }}
//                         spaceBetween={0}
//                         slidesPerView={1}
//                         slidesPerColumn={1}
//                         >
//                         <ol className="swiper-slide">
//                        {userWalks.map((walk) => 
//                             <li key={walk.id}>
//                                 <div>
//                                 Name: {walk.name}  
//                                 </div>
//                                 <div>
//                                 Date: {walk.date}  
//                                 </div>
//                                 <div>
//                                 Distance: {walk.distance}  
//                                 </div>
//                                 <div>
//                                 Duration: {walk.duration}  
//                                 </div>
//                                 <div>
//                                 Rating: {walk.rating}                                  </div>
//                                 <div>
//                                 Status: {walk.finished ? 'Completed': 'Planned'}
//                                 </div>
//                             </li>
//                         )}
//                         </ol>
//                     </Swiper>
//                 </div>
//             )
//         } else {
//             return (
//                 <h1>No Walks</h1>
//             )
//         }
//         }

// export default WalkInfo;