import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import dogGif from '../../../assets/img/dog-walking-gif3.gif'
import styles from '../../../css-modules/SplashPage.module.css'

function SplashPage() {
    const user = useSelector(state => state.session.user);

    if (user) {
      return <Redirect to={`/users/${user.id}`} />
    };

    return (
        <div className={styles.splashPageContainer}>
            <h1>Furever Walks</h1>
            <img src={dogGif} alt="Dog Walking" />
        </div>
    )
}

export default SplashPage;