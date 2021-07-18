import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import './SplashPage.css'

function SplashPage() {
    const user = useSelector(state => state.session.user);

    if (user) {
      return <Redirect to={`/users/${user.id}`} />
    };

    return (
        <div className="splash-page-container">
            <h1>Splash Page!</h1>
        </div>
    )
}

export default SplashPage;