import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDog } from '../../../store/dogs';
import { useParams } from 'react-router-dom';
import styles from '../../../css-modules/AddDog.module.css';

function AddDog({ setShowModal }) {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [image_url, setImage_url] = useState('');
    const dispatch = useDispatch();
    const { id } = useParams();

    const addDog = async (e) => {
        e.preventDefault();
        const user_id = id;
        const dog_total_distance = 0;
        const dog_total_duration = 0;
        const dog_total_walks = 0;
        if (!Number(age)) {
            setErrors(["Please enter a non-zero integer for the dog's age"])
        } else {
            const data = await dispatch(createDog(
                name,
                breed,
                age,
                image_url,
                user_id,
                dog_total_distance,
                dog_total_duration,
                dog_total_walks))
            if (data) {
                setErrors(data)
            }
            if (data === undefined) {
                setShowModal(false);
            }
        }
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
        <form className={styles.addDogForm} onSubmit={addDog}>
            <div className={styles.addDogFormErrors}>
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
                <button className={styles.submitButton} type='submit'>ADD DOG</button>
                {/* <button className={styles.cancelButton}>CANCEL</button> */}
            </div>
        </form>
    )
}

export default AddDog;