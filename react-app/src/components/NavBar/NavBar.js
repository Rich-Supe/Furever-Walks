
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../Splash/LoginFormModal';
import SignupFormModal from '../Splash/SignupFormModal';

function NavBar() {
  const user = useSelector(state => state.session.user);

  return (
    <>
      {user ? (
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact={true} activeClassName='active'>
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
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <LoginFormModal />
            </li>
            <li>
              <SignupFormModal />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBar;
