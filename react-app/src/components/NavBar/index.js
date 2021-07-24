
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import LoginFormModal from '../Splash/LoginFormModal';
import SignupFormModal from '../Splash/SignupFormModal';
import DemoFormModal from '../Splash/DemoFormModal'
import styles from '../../css-modules/NavBar.module.css';

function NavBar() {
const user = useSelector(state => state.session.user);
let userId = user ? user.id : null;

return (
    <nav className={styles.navbarContainer}>
    {user ? (
        <ul className={styles.navbar}>
            <li>
                <NavLink to='/' exact={true} className={styles.navlink} activeClassName='active'>
                HOME
                </NavLink>
            </li>
            <li>
                <NavLink to={`/users/walks/${userId}`} exact={true} className={styles.navlink} activeClassName='active'>
                WALKS
                </NavLink>
            </li>
            <li><LogoutButton /></li>
        </ul>
    ) : (
        <ul>
            <li><DemoFormModal /></li>
            <li><LoginFormModal /></li>
            <li><SignupFormModal /></li>
        </ul>
    )}
    </nav>
);
}

export default NavBar;
