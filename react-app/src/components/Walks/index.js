import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../css-modules/Walks.module.css'
import NewWalk from './NewWalk'
import WalksCarousel from './WalksCarousel'
import Maps from './Maps';
import { getWalksUser, getWalk } from '../../store/walks';


function Walks(){
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.session.user)
    let userId = user ? user.id : null
    const [ mapData, setMapData ] = useState(null)
    useEffect(()=>{
        dispatch(getWalksUser(2))
    },[dispatch])


    // Write a callback function to send as a prop to Maps component
    function mapCallback (data){
        setMapData(data) 
    }

    return (
        <div className={styles.walksPage}>
            <div className={styles.walksCarouselContainer}>
                <WalksCarousel />
            </div>
            <div className={styles.walksFormContainer}>
                <NewWalk mapData={mapData}/>
            </div>
            <div className={styles.walksMap}>
                <Maps handleCallback={mapCallback}/>
            </div>
        </div>
    )
}

export default Walks