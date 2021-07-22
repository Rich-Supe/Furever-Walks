import styles from '../../../css-modules/DogProfile.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editDog, deleteDog } from '../../../store/dogs';
import { setModal } from '../../../store/modals';

function DogProfile({ dog }) {
    // console.log(dog)
    // console.log(dog.id)
    const modalStatus = useSelector(state => state.modals.status)
    const dogId = dog.id
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(dog.name);
    const [breed, setBreed] = useState(dog.breed);
    const [age, setAge] = useState(dog.age);
    const [image_url, setImage_url] = useState(dog.image_url);
    const dispatch = useDispatch();
    const { id } = useParams();

    const submitEditDog = async (e) => {
        e.preventDefault();
        if (!Number(age)) {
            setErrors(["Please input an integer for the dog age."])
        } else {
            const payload = {
                dogId,
                name,
                breed,
                age,
                image_url,
                id
            }
            console.log(payload)
            console.log(payload.dogId)
            await dispatch(editDog(payload))
            // setShowModal(modalStatus);
            dispatch(setModal(false))
        }
    };

    const submitDeleteDog = async (e) => {
        e.preventDefault();
        await dispatch(deleteDog(dogId, id))
        // setShowModal(modalStatus);
        dispatch(setModal(false))
    }

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateBreed = (e) => {
        setBreed(e.target.value);
    };

    const updateAge = (e) => {
        setAge(e.target.value);
    };

    const updateImage_url = (e) => {
        setImage_url(e.target.value);
    };

    return (
        <div className={styles.formContainer}>
            <img
                src={image_url}
                alt='DogProfileImage'
                className={styles.dogProfileImage}
            />
            <form onSubmit={submitEditDog}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={updateName}
                        value={name}
                    ></input>
                </div>
                <div>
                    <input
                        type='text'
                        name='breed'
                        placeholder='Breed'
                        onChange={updateBreed}
                        value={breed}
                    ></input>
                </div>
                <div>
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={updateAge}
                        value={age}
                    ></input>
                </div>
                <div>
                    <input
                        type='text'
                        name='img_url'
                        placeholder='Image URL'
                        onChange={updateImage_url}
                        value={image_url}
                    ></input>
                </div>
                <div>
                    <button type='submit'>Save Changes</button>
                </div>
                <div>
                    <button onClick={submitDeleteDog}>
                        Delete Dog
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DogProfile