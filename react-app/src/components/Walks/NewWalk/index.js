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
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log("Current map data from map component", mapData)
    
    useEffect(() => {
        dispatch(getDogs(id))
    }, [id])
    const dogs = useSelector((state) => Object.values(state.dogs));
    const dogIds = {};
    dogs.forEach((dog) => {
        dogIds[dog.id] = false;
    })
    var walkingdogs = [];
    const checked = (dog) => {
        dogIds[dog.id] = !dogIds[dog.id];
        // console.log('checked value!!!', dogIds)
        const entries = Object.entries(dogIds)
        // console.log(entries)
        entries.forEach((entr) => {
            if (entr[1] && !walkingdogs.includes(Number(entr[0]))){
                walkingdogs.push(Number(entr[0]))
                // console.log('line 36', walkingdogs)
            }
            if (!entr[1] && walkingdogs.includes(Number(entr[0]))) {
                walkingdogs.splice(walkingdogs.indexOf(Number(entr[0])), 1)
            }
            
        })
        // console.log("line 40", walkingdogs)
        return walkingdogs;
    }

    const addWalk = async (e) => {
        e.preventDefault();
        const user_id = Number(id);
        const rating = 0;
        // const date = new Date();

        // const dogsOnWalk = [];
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
            walkingdogs
        }
        const data = await dispatch(createWalk(payload))
        // const payload2 = {
        //     walkingdogs
        // }
        console.log('line 71', payload.walkingdogs)
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
                    DOGS:
                    {dogs.map((dog) => 
                        <div>
                            {dog.name}
                            <input
                                key={dog.id}
                                type='checkbox'
                                name='dog'
                                onChange={() => checked(dog)}
                                value={dog}>
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