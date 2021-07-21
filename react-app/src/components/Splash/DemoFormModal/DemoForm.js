import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import styles from '../../../css-modules/DemoForm.module.css'

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
        <form className={styles.demoFormContainer} onSubmit={onLogin}>
            <h1>Log in as a demo user?</h1>
            <div className={styles.wrapper}>
              <button type="submit">Yes!</button>
            </div>
        </form>

    )
}

export default DemoForm;