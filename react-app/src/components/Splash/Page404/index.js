
import dogGif from '../../../assets/img/404-dog.gif'
// import dog404 from '../../../assets/img/404-dog3.jpg'
import styles from '../../../css-modules/Page404.module.css'

import { useHistory } from 'react-router-dom'

function Page404(){
    const history = useHistory()

    return (
        <div className={styles.page404}>
            <h1 className={styles.page404__header}>Page Not Found!</h1>
            <div className={styles.page404__404}>
                <p className={styles.page404__4}>4</p>
                <img src={dogGif} alt="404" className={styles.page404__image}/>
                <p className={styles.page404__4}>4</p>
            </div>
            <div className={styles.page404__text}>
                <div>
                    <p>The resource couldn't be found!</p>
                </div>
                {/* <div class="wrapper" onClick={() => history.push("/")}>
                    <a href="/"><span>Take me home!</span></a>
                </div> */}
                <div className="wrapper">
                    <button onClick={() => history.push("/")}>
                        <span>TAKE ME HOME</span>
                    </button>
                </div>
            </div>
            {/* <img src={dog404} alt="dog 404" className="Page-404__image"></img> */}
        </div>
    )
}

//change

export default Page404;