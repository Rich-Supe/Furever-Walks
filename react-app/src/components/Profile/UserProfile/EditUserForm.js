import React, { useState, useEffect } from 'react';
// import { Modal } from '../../../context/Modal';
// import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editUser, deleteUser } from '../../../store/session';
import styles from '../../../css-modules/EditUserForm.module.css'

const EditUserForm = ({ setShowForm }) => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [bio, setBio] = useState(user?.bio);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!name) errors.push('Please provide your name.');
    if (!username) errors.push('Please provide a username.');
    if (!email) errors.push('Please provide an email.');
    if (confirmPassword && password !== confirmPassword) errors.push('Password and confirm password must match.');
    setErrors(errors);
  }, [name, username, email, password, confirmPassword]);
  
  const onSave = async (e) => {
    e.preventDefault();
    const payload = {
      id: user.id,
      name,
      username,
      bio,
      email,
      password,
      user_total_distance: 0,
      user_total_duration: 0,
      user_total_walks: 0
    }
    const data = await dispatch(editUser(payload));
    if (data) {
      setErrors(data);
    } else {
      // setShowConfirmModal(false);
      history.push('/');
    }
  };

  const updateName = (e) => setName(e.target.value);
  const updateUsername = (e) => setUsername(e.target.value);
  const updateBio = (e) => setBio(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleDelete = async () => {
    const data = await dispatch(deleteUser(user));
    if (data) history.push('/');
  }

  return (
    <div className={styles.editUserContainer}>
      <form className={styles.editUserForm} onSubmit={onSave}>
        <div className={styles.editUserFormErrors}>
          {errors.map((error, ind) => (<div key={ind}>{error}</div>))}
        </div>
        <div>
          <input
            name='name'
            type='text'
            placeholder={name ? name : 'Name'}
            value={name}
            onChange={updateName}
          />
        </div>
        <div>
          <input
            name='username'
            type='text'
            placeholder={username ? username : 'Username'}
            value={username}
            onChange={updateUsername}
          />
        </div>
        <div>
          <input
            name='bio'
            type='text'
            placeholder={bio ? bio : 'Bio'}
            value={bio}
            onChange={updateBio}
          />
        </div>
        <div>
          <input
            name='email'
            type='text'
            placeholder={email ? email : 'Email'}
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div>
          <input
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={updateConfirmPassword}
          />
        </div>
        <div className='wrapper'>
          <button className={styles.submitButton} type='submit' disabled={errors.length}>Save</button>
          <button className={styles.cancelButton} onClick={() => setShowForm(false)}>Cancel</button>
        </div>
        <div>
          {/* <button onClick={() => setShowConfirmModal(true)}>Delete Profile</button>
          {showConfirmModal && (
              <Modal onClose={() => setShowConfirmModal(false)}>
                  <ConfirmDeleteModal setShowConfirmModal={setShowConfirmModal} />
              </Modal>
          )} */}
          <button className={styles.deleteButton} onClick={handleDelete}>Delete Profile</button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
