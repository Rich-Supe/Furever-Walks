import styles from '../../../css-modules/AddDogModal.module.css'
import { useSelector, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDog } from '../../../store/dogs';
import { useParams } from 'react-router-dom';

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
        console.log('data', data)
        console.log('errors', errors)
        if (data['id']) {
            setErrors([]);
            setShowModal(false);
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
        <form onSubmit={addDog}>
            {/* {typeof(errors) === 'array' ? ( */}
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            {/* ) : null
            } */}
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
                <button type='submit'>Add Dog</button>
            </div>
        </form>
    )
}

export default AddDog;