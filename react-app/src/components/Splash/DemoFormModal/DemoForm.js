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

  const onLogin = async (e) => {
    e.preventDefault();
    const authorized = await dispatch(login(email, password));
    if (authorized) history.push(`/users/1`)
  }

  return (
    <div className={styles.demoFormContainer} onClick={onLogin}>
      <h1> <br/> <br/>DEMO<br/>LOG IN</h1>
    </div>
  )
}

export default DemoForm;