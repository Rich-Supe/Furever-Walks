import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../../store/session';
import { useHistory } from 'react-router-dom';
import styles from '../../../css-modules/ConfirmDeleteModal.module.css'

const ConfirmDeleteModal = ({ setShowConfirmModal }) => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = async () => {
        await dispatch(deleteUser(user))
        history.push('/')
    }

    return (
        <div>
            <h3>Are you sure you want to delete your account?</h3>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => setShowConfirmModal(false)}>No</button>
        </div>
    )
}

export default ConfirmDeleteModal;