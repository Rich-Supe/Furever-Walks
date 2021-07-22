import styles from '../../../css-modules/NewWalk.module.css';
import { createWalk } from '../../../store/walks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function NewWalk() {
    const errors = [];
    const [name, setName] = useState('');
    const [distance, setDistance] = useState("0");
    const [duration, setDuration] = useState("0");
    const [finished, setFinished] = useState(false);
    const [routeData, setRouteData] = useState({});
    const dispatch = useDispatch();
    const { id } = useParams();

    const addWalk = async (e) => {
        e.preventDefault();
        const user_id = Number(id);
        const rating = 0;
        // const date = new Date();

        if (name.length < 1) errors.push('The walk must have a name.')
        const payload = {
            name,
            distance,
            duration,
            rating,
            finished,
            routeData,
            user_id}
        const data = await dispatch(createWalk(payload))
            
        // console.log("DATA!!!", payload)
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
                    <button type='submit'>Add Walk</button>
                </div>
            </form>
        </div>
    )
}


export default NewWalk;