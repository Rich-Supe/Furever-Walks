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
    // console.log("##############", userId)
    useEffect(()=>{
        dispatch(getWalksUser(2))
    },[dispatch])


    // Write a callback function to send as a prop to Maps component
    function mapCallback (data){
        setMapData(data) 
    }

    // console.log("---------", mapCallback, "---------")

    // if (mapData) {
    //     console.log("asdfasdfa;lj", mapData)
    // }

    return (
        <div className={styles.walksPage}>
            {/* <h1>Walks</h1> */}
            <div className={styles.walksCarouselContainer}><WalksCarousel /></div>
            <div className={styles.walksFormContainer}><NewWalk mapData={mapData}/></div>
            <div className={styles.walksMap}><Maps handleCallback={mapCallback}/></div>
        </div>
    )
}

export default Walks