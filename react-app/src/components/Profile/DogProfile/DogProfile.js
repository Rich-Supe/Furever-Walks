import styles from '../../../css-modules/DogProfile.module.css';
import { useSelector, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function DogProfile({ dog }) {
    console.log(dog)
    console.log(dog.id)
    const dogs = useSelector(state => state.dogs)
    console.log(dogs)
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [image_url, setImage_url] = useState('');
    const dispatch = useDispatch();
    const { id } = useParams();

    const editDog = async (e) => {
        e.preventDefault();

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
        <form onSubmit={editDog}>
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
    )
}

export default DogProfile