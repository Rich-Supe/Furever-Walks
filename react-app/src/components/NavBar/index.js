
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import LoginFormModal from '../Splash/LoginFormModal';
import SignupFormModal from '../Splash/SignupFormModal';
import './NavBar.css'

function NavBar() {
  const user = useSelector(state => state.session.user);

  return (
    <nav className='navbar-container'>
      {user ? (
        <ul>
          <li>
            <NavLink to='/' exact={true} className='navbar-container__navlink' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
          {/* <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li> */}
        </ul>
      ) : (
        <ul>
          <li>
            <LoginFormModal />
          </li>
          <li>
            <SignupFormModal />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
