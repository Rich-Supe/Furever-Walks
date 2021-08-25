import styles from '../../../css-modules/NewWalk.module.css';
import { createWalk } from '../../../store/walks';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDogs, isDogSelected } from '../../../store/dogs';

function NewWalk({ mapData }) {
    const [errors, setErrors] = useState([]);
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
    const dogs2 = useSelector(state => state.dogs)
    // console.log(dogs);
    console.log(dogs2);

    const dogIds = {};
    // dogs.forEach((dog) => {
    //     dogIds[dog.id] = false;
    // })
    const walkingdogs = [];

    const checked = (dog) => {
        dogIds[dog.id] = !dogIds[dog.id];

        const dogId = dog.id
        let checkStatus;
        // console.log(dogs)
        if(!dogs2[dogId].status) {
            checkStatus = true
        } else if (dogs2[dogId].status === true) {
            checkStatus = false
        } else if (dogs2[dogId].status === false) {
            checkStatus = true
        }
        dispatch(isDogSelected(dogId, checkStatus))
        return walkingdogs;
    }

    
    // const dogCheckboxSelected = (dogId) => {
    //     const selected = dogs[dogId - 1].status
    //     return selected;
    // }

    // if(mapData !== null ) {
    // console.log(mapData)
    // console.log(mapData.distance.indexOf('m'))
    // console.log(Number(mapData.distance.substring(0, mapData.distance.indexOf('mi'))))
    // console.log(Number(mapData.duration.substring(0, mapData.duration.indexOf('mins'))))
    // }

    const addWalk = async (e) => {
        e.preventDefault();
        const user_id = Number(id);
        const rating = 0;
        // const date = new Date();

        // const dogsOnWalk = [];
        // we will add all the dogs on the walk to this array then send it in the payload

        dogs.forEach((dog) => {
            if (dog.status === true) {
                walkingdogs.push(dog.id)
            }
        })


        // setDistance(mapData.distance)
        // setDuration(mapData.duration)

        // setErrors([]);
        // console.log(mapData);
        // if (mapData === null) {
        //     const msg = 'Please select a route on the map.'
        //     setErrors([...errors, msg])
        // }
        // else if (name.length < 1) {
        //     const msg = 'The walk must have a name.'
        //     setErrors([...errors, msg])
        // } else {
        console.log('success');
        const payload = {
            name,
            distance: Number(mapData.distance.substring(0, mapData.distance.indexOf('mi'))),
            duration: Number(mapData.duration.substring(0, mapData.duration.indexOf('mins'))),
            rating,
            finished,
            routeData,
            user_id,
            walkingdogs
        }
        const data = await dispatch(createWalk(payload))
        if (data) {
            setErrors(data);
        }
        setName("")
        setDuration(0)
        setDistance(0)
        setFinished(false)
        // }
    }


    return (
        <div className={styles.newWalkContainer}>
            <h1>NEW WALK</h1>
            <form className={styles.newWalkForm} onSubmit={addWalk}>
                <ul>
                    {errors.length > 0 && errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div>
                    WALK NAME:

                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    ></input>
                </div>
                {mapData !== null && (
                    <div>
                        <div>
                            {`${mapData.distance} ${mapData.duration}`}
                        </div>
                    </div>
                )}
                <div >
                    COMPLETE:
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
                    <p className={styles.dogHeader}>DOGS:</p>
                    {dogs.map((dog) =>
                        <div className={styles.checkboxes}>
                            <p>{dog.name}</p>
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