import styles from '../../../css-modules/NewWalk.module.css';
import { createWalk } from '../../../store/walks';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDogs,isDogSelected } from '../../../store/dogs';

function NewWalk({mapData}) {
    const errors = [];
    const [name, setName] = useState('');
    const [distance, setDistance] = useState("0");
    const [duration, setDuration] = useState("0");
    const [finished, setFinished] = useState(false);
    const [routeData, setRouteData] = useState({});
    const dispatch = useDispatch();
    const { id } = useParams();
    // let mapDistance = mapData.distance
    // let mapDuration = mapData.duration
    
    useEffect(() => {
        dispatch(getDogs(id))
        // setDistance(mapData.distance)
        // setDuration(mapData.duration)
    }, [id])
    
    const dogs = useSelector((state) => Object.values(state.dogs));
    const dogIds = {};
    dogs.forEach((dog) => {
        dogIds[dog.id] = false;
    })
    const walkingdogs = [];

    const checked = (dog) => {
        dogIds[dog.id] = !dogIds[dog.id];
        const entries = Object.entries(dogIds);
        entries.forEach((entr) => {
            if (entr[1] && !walkingdogs.includes(Number(entr[0]))){
                walkingdogs.push(Number(entr[0]));
            }
            if (!entr[1] && walkingdogs.includes(Number(entr[0]))) {
                walkingdogs.splice(walkingdogs.indexOf(Number(entr[0])), 1)
            }
            
        })
        const dogId = dog.id
        let checkStatus;
        if (dogs[dogId - 1].status === undefined) {
            checkStatus = true
        } else if (dogs[dogId - 1].status === true) {
            checkStatus = false
        } else if (dogs[dogId - 1].status === false) {
            checkStatus = true
        }
        dispatch(isDogSelected(dogId, checkStatus))
        return walkingdogs;
    }

    const dogCheckboxSelected = (dogId) => {
        const selected = dogs[dogId - 1].status
        return selected;
    }

    const addWalk = async (e) => {
        e.preventDefault();
        const user_id = Number(id);
        const rating = 0;
        // const date = new Date();

        // const dogsOnWalk = [];
        // we will add all the dogs on the walk to this array then send it in the payload
        
        // setDistance(mapData.distance)
        // setDuration(mapData.duration)

        if (name.length < 1) errors.push('The walk must have a name.')
        const payload = {
            name,
            distance,
            duration,
            rating,
            finished,
            routeData,
            user_id,
            walkingdogs
        }
        await dispatch(createWalk(payload))
        setName("")
        setDuration(0)
        setDistance(0)
        setFinished(false)
    }


    return (
        <div className={styles.newWalkContainer}>
            <h1>NEW WALK</h1>
            <form className={styles.newWalkForm} onSubmit={addWalk}>
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
                    STATUS:
                    <input
                        type='checkbox'
                        name='status'
                        onChange={() => setFinished(!finished)}
                        value={finished}
                        checked={finished}
                    ></input>
                </div>
                {/* <div>
                    <input
                        type='text'
                        name='routeData'
                        placeholder='Route Data'
                        onChange={(e) => setRouteData(e.target.value)}
                        value={routeData}
                    ></input>
                </div> */}
                <div>
                    DOGS:
                    {dogs.map((dog) => 
                        <div>
                            {dog.name}
                            <input
                                key={dog.id}
                                type='checkbox'
                                name='dog'
                                onChange={() => checked(dog)}
                                value={dog}
                                // checked={isDogChecked}
                                >
                            </input>
                            
                        </div>
                    )}
                </div>
                <div>
                    <button type='submit'>ADD WALK</button>
                </div>
            </form>
        </div>
    )
}


export default NewWalk;