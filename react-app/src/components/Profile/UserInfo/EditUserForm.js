import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editUser, deleteUser } from '../../../store/session';
import styles from '../../../css-modules/EditUserModal.module.css'

const EditUserForm = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [bio, setBio] = useState(user?.bio);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

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
    if (data) setErrors(data);
  };

  const updateName = (e) => setName(e.target.value);
  const updateUsername = (e) => setUsername(e.target.value);
  const updateBio = (e) => setBio(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleClear = (e) => {
    e.preventDefault();
    setName('');
    setUsername('');
    setBio('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h3>Edit Profile</h3>
      <form className={styles.loginFormContainer} onSubmit={onSave}>
        <div>
          {errors.map((error, ind) => (<div key={ind}>{error}</div>))}
        </div>
        <div>
          <input
            name='name'
            type='text'
            placeholder={name}
            value={name}
            onChange={updateName}
          />
        </div>
        <div>
          <input
            name='username'
            type='text'
            placeholder={username}
            value={username}
            onChange={updateUsername}
          />
        </div>
        <div>
          <input
            name='bio'
            type='text'
            placeholder={bio}
            value={bio}
            onChange={updateBio}
          />
        </div>
        <div>
          <input
            name='email'
            type='text'
            placeholder={email}
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
          <button type='submit'>Save</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <div>
          <button onClick={() => setShowConfirmModal(true)}>Delete Profile</button>
          {showConfirmModal && (
              <Modal onClose={() => setShowConfirmModal(false)}>
                  <ConfirmDeleteModal setShowConfirmModal={setShowConfirmModal} />
              </Modal>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
