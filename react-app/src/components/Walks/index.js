
import styles from '../../css-modules/Walks.module.css'
import NewWalk from './NewWalk'
import WalkInfo from './WalkInfo'
import WalksCarousel from './WalksCarousel'

function Walks(){

    return (
        <div className={styles.walksPage}>
            <h1>Walks</h1>
            <NewWalk />
            <WalksCarousel />
            <WalkInfo />
        </div>
    )
}

export default Walks