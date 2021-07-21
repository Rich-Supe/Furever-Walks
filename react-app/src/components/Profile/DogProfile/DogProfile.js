import styles from '../../../css-modules/DogProfile.module.css';
import { useSelector, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editDog, deleteDog } from '../../../store/dogs';

function DogProfile({ dog, setShowModal }) {
    // console.log(dog)
    // console.log(dog.id)
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
        // if (typeof(age) !== 'integer') {

        // }
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
    };

    const submitDeleteDog = async (e) => {
        e.preventDefault();
        await dispatch(deleteDog(dogId, id))
        setShowModal(false);
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
        <div>
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
            </form>
            <button onClick={submitDeleteDog}>
                Delete Dog
            </button>
        </div>
    )
}

export default DogProfile