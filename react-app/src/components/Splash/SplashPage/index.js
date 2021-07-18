import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import dogGif from '../../../assets/img/dog-walking-gif.gif'
import './SplashPage.css'

function SplashPage() {
    const user = useSelector(state => state.session.user);

    if (user) {
      return <Redirect to={`/users/${user.id}`} />
    };

    return (
        <div className="splash-page-container">
            <div className="splash-page-container__image">
                <img src={dogGif} alt="Dog Walking" />
            </div>
            <h1>Furever Walks!</h1>
        </div>
    )
}

export default SplashPage;