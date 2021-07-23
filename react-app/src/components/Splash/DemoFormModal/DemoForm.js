import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import paw from '../../../assets/img/dog-paw.png'
import styles from '../../../css-modules/DemoForm.module.css'

const DemoForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = 'demo@aa.io'
  const password = 'password'

  const onLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    history.push(`/users/1`)
  }

  return (
    <div className={styles.demoFormContainer}>
      <img src={paw} alt="Paw" onClick={onLogin}/>
      <h1 onClick={onLogin}>Demo User <br/> Log In</h1>
      {/* <div className={styles.wrapper}>
        <button type="submit">Yes!</button>
      </div> */}
    </div>
  )
}

export default DemoForm;