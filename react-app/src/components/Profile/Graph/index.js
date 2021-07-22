import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWalksDog } from '../../../store/walks';
import styles from '../../../css-modules/Graph.module.css';

function Graph() {
    const dispatch = useDispatch();

    const [showDuration, setShowDuration] = useState(false)

    const user = useSelector(state => state.session.user);
    const dogsObj = useSelector(state => state.dogs);
    const dogs = dogsObj['dogs']
    const walks = useSelector(state => state.walks);
    // console.log('USER-----------------', user);
    console.log('DOGS-----------------', dogs);
    // console.log('DOG-----------------', dogs['1']);
    // console.log('WALKS-----------------', walks);
    // console.log('WALKS-----------------', walks['1']);

    useEffect(() => {
        dispatch(getWalksDog(1))
    }, [dispatch]);

    const today1 = new Date();
    const today2 = new Date();
    today2.setDate(today2.getDate()-1);
    const today3 = new Date();
    today3.setDate(today3.getDate()-2);
    const today4 = new Date();
    today4.setDate(today4.getDate()-3);
    const today5 = new Date();
    today5.setDate(today5.getDate()-4);
    const today6 = new Date();
    today6.setDate(today6.getDate()-5);
    const today7 = new Date();
    today7.setDate(today7.getDate()-6);

    const data = [
        {name: today7.toDateString().slice(0, 10), dogDuration1: 350, dogDistance1: 450, dogDuration2: 150, dogDistance2: 350, dogDuration3: 100, dogDistance3: 500},
        {name: today6.toDateString().slice(0, 10), dogDuration1: 350, dogDistance1: 450, dogDuration2: 150, dogDistance2: 350, dogDuration3: 100, dogDistance3: 500},
        {name: today5.toDateString().slice(0, 10), dogDuration1: 350, dogDistance1: 450, dogDuration2: 150, dogDistance2: 350, dogDuration3: 100, dogDistance3: 500},
        {name: today4.toDateString().slice(0, 10), dogDuration1: 350, dogDistance1: 450, dogDuration2: 150, dogDistance2: 350, dogDuration3: 100, dogDistance3: 500},
        {name: today3.toDateString().slice(0, 10), dogDuration1: 350, dogDistance1: 450, dogDuration2: 150, dogDistance2: 350, dogDuration3: 100, dogDistance3: 500},
        {name: today2.toDateString().slice(0, 10), dogDuration1: 350, dogDistance1: 450, dogDuration2: 150, dogDistance2: 350, dogDuration3: 100, dogDistance3: 500},
        {name: today1.toDateString().slice(0, 10), dogDuration1: 350, dogDistance1: 450, dogDuration2: 150, dogDistance2: 350, dogDuration3: 100, dogDistance3: 500},
    ]

    for (let dog in dogs) {
        // data['dog1'] = dog['dog_total_distance']
        // data['dog1'] = dog['dog_total_duration']
        console.log('DOG----------', dog);
    }

    return (
        <div>
            <div>
                <label>
                    Distance
                    <input type='radio' value='distance' onChange={() => setShowDuration(true)} checked={showDuration} />
                </label>
                <label>
                    Duration
                    <input type='radio' value='duration' onChange={() => setShowDuration(false)} checked={!showDuration}/>
                </label>
            </div>
            <div>
                {showDuration ? (
                    <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="dogDuration1" stroke="#8884d8" />
                        <Line type="monotone" dataKey="dogDuration2" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="dogDuration3" stroke="#e2543c" />
                    </LineChart>
                ) : (
                    <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="dogDistance1" stroke="#8884d8" />
                        <Line type="monotone" dataKey="dogDistance2" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="dogDistance3" stroke="#e2543c" />
                    </LineChart>
                )}
            </div>
        </div>
    )
}

export default Graph;