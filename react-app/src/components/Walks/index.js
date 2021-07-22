import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../css-modules/Walks.module.css'
import NewWalk from './NewWalk'
import WalkInfo from './WalkInfo'
import WalksCarousel from './WalksCarousel'
import Maps from './Maps';
import { getWalksUser, getWalk } from '../../store/walks';


function Walks(){
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.session.user)
    let userId = user ? user.id : null
    // console.log("##############", userId)
    useEffect(()=>{
        dispatch(getWalksUser(2))
    },[dispatch])
    return (
        <div className={styles.walksPage}>
            <h1>Walks</h1>
            <div className={styles.walksFormContainer}><NewWalk /></div>
            <div className={styles.walksCarouselContainer}><WalksCarousel /></div>
            <div className={styles.walksInfoContainer}><WalkInfo /></div>
            <div className={styles.walksMap}><Maps /></div>
        </div>
    )
}

export default Walks