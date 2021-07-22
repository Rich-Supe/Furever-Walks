import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWalksDog } from '../../../store/walks';
import styles from '../../../css-modules/Graph.module.css';

function Graph() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const dogs = useSelector(state => state.dogs);
    const walks = useSelector(state => state.walks);
    console.log('USER-----------------', user);
    console.log('DOG-----------------', dogs);
    console.log('DOG-----------------', dogs['1']);
    console.log('WALKS-----------------', walks);
    console.log('WALKS-----------------', walks['1']);

    // for (let dog in dogs) {
    //     console.log('For In Loop for Dog', dog);
    // }

    useEffect(() => {
        dispatch(getWalksDog(1))
    }, [dispatch]);

    // create getAllWalksDog thunker and backend route?

    // useEffect(() => {
    //     for (let dog in dogs) {
    //         dispatch(getWalksDog(dog.id))
    //     }
    // }, [dispatch, dogs]);

    // let data = [];
    // for (let dog in dogs) {
    //     data.push(
    //         {name: Date().toLocaleString().slice(0, 10), dog1: dog.dog_total_distance}
    //     )
    // }

    // { name: dates, 
    //  (loop over all the dogs that belong to the user and filter ones where the date matches on x-axis
    //  = `${dog1.name}Distance`: dog1.dog_total_distance 
    //    `${dog2.name}Distance`: dog2.dog_total_distance 
    //    `${dog3.name}Distance`: dog3.dog_total_distance 
    //    `${dog1.name}Duration`: dog1.dog_total_duration 
    //    `${dog2.name}Duration`: dog2.dog_total_duration 
    //    `${dog3.name}Duration`: dog3.dog_total_duration 
    // ) }

    const today = new Date()

    const today1 = new Date();
    today1.setDate(today1.getDate()-1);

    const today2 = new Date();
    today2.setDate(today2.getDate()-2);

    const today3 = new Date();
    today3.setDate(today3.getDate()-3);

    const today4 = new Date();
    today4.setDate(today4.getDate()-4);

    const today5 = new Date();
    today5.setDate(today5.getDate()-5);

    const today6 = new Date();
    today6.setDate(today6.getDate()-6);

    const data = [
        {name: today6.toDateString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: today5.toDateString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: today4.toDateString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: today3.toDateString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: today2.toDateString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: today1.toDateString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: today.toDateString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
    ]

    return (
        <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="dog1" stroke="#8884d8" />
            <Line type="monotone" dataKey="dog2" stroke="#82ca9d" />
            <Line type="monotone" dataKey="dog3" stroke="#e2543c" />
        </LineChart>
    )
}

export default Graph;