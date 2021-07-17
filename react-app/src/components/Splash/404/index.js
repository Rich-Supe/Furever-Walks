
import dogGif from '../../../assets/img/404-dog.gif'
import dog404 from '../../../assets/img/404-dog3.jpg'
import './404.css'

import { useHistory } from 'react-router-dom'

function Page404(){
    const history = useHistory()

    return (
        <div className="page-404">
            <h1 className="page-404__header">Page Not Found!</h1>
            <div className="page-404__404">
                <p className="page-404__4">4</p>
                <img src={dogGif} alt="404" className="page-404__image"/>
                <p className="page-404__4">4</p>
            </div>
            <div className="page-404__text">
                <p>The resource couldn't be found!</p>
                {/* <button>Return Home</button> */}
                <div>
                <div class="wrapper" onClick={() => history.push("/")}>
                    <a href="#"><span>Take me home!</span></a>
                </div>
                </div>
            </div>
            {/* <img src={dog404} alt="dog 404" className="Page-404__image"></img> */}
        </div>
    )
}

export default Page404;