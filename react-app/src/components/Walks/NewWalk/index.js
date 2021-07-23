import styles from '../../../css-modules/NewWalk.module.css';
import { createWalk } from '../../../store/walks';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDogs } from '../../../store/dogs';

function NewWalk({mapData}) {
    const errors = [];
    const [name, setName] = useState('');
    const [distance, setDistance] = useState("0");
    const [duration, setDuration] = useState("0");
    const [finished, setFinished] = useState(false);
    const [routeData, setRouteData] = useState({});
    const [selectedDog, setSelectedDog] = useState(false)
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log("Current map data from map component", mapData)

    useEffect(() => {
        dispatch(getDogs(id))
    }, [id])
    const dogs = useSelector((state) => Object.values(state.dogs));
    console.log(dogs);
    // dogs = Object.values(dogs);
    // dogs.map((dog) => console.log("@@@@@@DOGS######", dog.name))

    const addDogToWalk = (dog, selectedDog) => {
        if (selectedDog) {
            // dispatch(addWalkByDog(dog.id))
        }
    }

    const dogIds = {}
    const checked = (dog) => {
        setSelectedDog(!selectedDog)
        if(!selectedDog) {
            // dogIds[]
            console.log('zzzzzzzzzz', dog)
            dogIds[dog.id] = dog.id
        } else {
            delete dogIds[dog.id]
        }
        console.log('41', dogIds);
    }

    const addWalk = async (e) => {
        e.preventDefault();
        const user_id = Number(id);
        const rating = 0;
        // const date = new Date();

        const dogsOnWalk = [];
        // we will add all the dogs on the walk to this array then send it in the payload

        if (name.length < 1) errors.push('The walk must have a name.')
        const payload = {
            name,
            distance,
            duration,
            rating,
            finished,
            routeData,
            user_id,
            //some array of dogIds
        }
        const data = await dispatch(createWalk(payload))

    }


    return (
        <div>
            <h1>New Walk</h1>
            <form onSubmit={addWalk}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    ></input>
                </div>
                <div>
                    <input
                        type='number'
                        name='distance'
                        placeholder='Distance'
                        onChange={(e) => setDistance(Number(e.target.value))}
                        value={distance}
                    ></input>
                </div>
                <div>
                    <input
                        type='number'
                        name='duration'
                        placeholder='Duration'
                        onChange={(e) => setDuration(Number(e.target.value))}
                        value={duration}
                    ></input>
                </div>
                <div>
                    Complete:
                    <input
                        type='checkbox'
                        name='status'
                        // placeholder='Status'
                        onChange={() => setFinished(!finished)}
                        value={finished}
                    ></input>
                </div>
                <div>
                    <input
                        type='text'
                        name='routeData'
                        placeholder='Route Data'
                        onChange={(e) => setRouteData(e.target.value)}
                        value={routeData}
                    ></input>
                </div>
                <div>
                    Dogs
                    {dogs.map((dog) => 
                        <div>
                            {dog.name}
                            <input
                                key={dog.id}
                                type='checkbox'
                                name='dog'
                                onChange={() => checked(dog)}
                                value={selectedDog}>
                            </input>
                            
                        </div>
                    )}
                </div>
                <div>
                    <button type='submit'>Add Walk</button>
                </div>
            </form>
        </div>
    )
}


export default NewWalk;