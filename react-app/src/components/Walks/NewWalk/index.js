import styles from '../../../css-modules/NewWalk.module.css';
import { createWalk } from '../../../store/walks';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getDogs, isDogSelected } from '../../../store/dogs';

function NewWalk({ mapData }) {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    // const [distance, setDistance] = useState("0");
    // const [duration, setDuration] = useState("0");
    const [rating, setRating] = useState('');
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

    const dogIds = {};
    const walkingdogs = [];

    const checked = (dog) => {
        dogIds[dog.id] = !dogIds[dog.id];

        const dogId = dog.id
        let checkStatus;
        if (!dogs2[dogId].status) {
            checkStatus = true
        } else if (dogs2[dogId].status === true) {
            checkStatus = false
        } else if (dogs2[dogId].status === false) {
            checkStatus = true
        }
        dispatch(isDogSelected(dogId, checkStatus))
        return walkingdogs;
    }

    const addWalk = async (e) => {
        e.preventDefault();
        const user_id = Number(id);

        dogs.forEach((dog) => {
            if (dog.status === true) {
                walkingdogs.push(dog.id)
            }
        })

        
        if (mapData === null) {
            setErrors(['Please plan a walk route by selecting a start and destination on the map followed by search.'])
        }
        
        else if (walkingdogs.length === 0) {
            setErrors(['Please select at least one dog to walk with.'])
        }

        else {
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
                console.log("is this working?", data);
                setErrors(data);
                history.push(`users/walks/${id}`)
            } else {
                setName("")
                // setDuration(0)
                // setDistance(0)
                setRating("")
                setFinished(false)
                setErrors([])
                dogs.forEach(dog => {
                    if (dogs2[dog.id].status) {
                        dogs2[dog.id].status = false
                    }
                })
                mapData.distance = ""
                mapData.duration = ""
                //later on, clear the map instead of redirect
                history.push('/')
            }
        }
    }


    return (
        <div className={styles.newWalkContainer}>
            <h1 id='newWalkHeader' className={styles.header}>NEW WALK</h1>
            <form className={styles.newWalkForm} onSubmit={addWalk}>
                <ul>
                    {errors.length > 0 && errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className={styles.topInputSection}>
                        {mapData !== null && (
                            <div>
                                <div className={styles.mapData}>
                                    <p className={styles.dataP}>Distance: {mapData.distance}</p>
                                    <p className={styles.dataP}>Duration: {mapData.duration}</p>
                                    {/* {`Length: ${mapData.distance} Minutes: ${mapData.duration}`} */}
                                </div>

                            </div>
                        )}
                    <div className={styles.walkName}>
                        <div>
                            NAME:
                        </div>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required={true}
                        ></input>
                    </div>
                    <div className={styles.rating}>
                        <div>
                            RATING:
                        </div>
                        <input
                            type='number'
                            name='rating'
                            placeholder='Rating from 0 - 10'
                            min='0'
                            max='10'
                            onChange={(e) => setRating(e.target.value)}
                            value={rating}
                            required={true}
                        ></input>
                    </div>
                    <div className={styles.complete}>
                        <div>
                            COMPLETED:
                        </div>
                        <input
                            type='checkbox'
                            name='status'
                            onChange={() => setFinished(!finished)}
                            value={finished}
                            checked={finished}
                            // required={true}
                        ></input>
                    </div>
                </div>
                <div>
                    <p className={styles.dogHeader}>DOGS:</p>
                    <div className={styles.dogs}>
                        {dogs.map((dog) =>
                            <div className={styles.checkboxes}>
                                <p>{dog.name}</p>
                                <input
                                    key={dog.id}
                                    type='checkbox'
                                    name='dog'
                                    onChange={() => checked(dog)}
                                    checked={dogs2[dog.id].status || false}
                                >
                                </input>

                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.btnDiv}>
                    <button type='submit'>ADD WALK</button>
                </div>
            </form>
        </div>
    )
}


export default NewWalk;