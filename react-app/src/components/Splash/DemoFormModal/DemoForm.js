import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import './DemoFormModal.css'

const DemoForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const email = 'demo@aa.io'
    const password = 'password'

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.push(`/users/1`)
  }
    return (
        <form className='login-form-container' onSubmit={onLogin}>
            <h1>Log in as a demo user?</h1>
            <button type="submit">Yes!</button>
        </form>

    )
}

export default DemoForm;