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

    for (let dog in dogs) {
        console.log('For In Loop for Dog', dog);
    }

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

    // { name: (get date from walks), (loop over all the dogs that belong to a user and filter ones where the date matches) }

    const data = [
        {name: Date().toLocaleString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: Date().toLocaleString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: Date().toLocaleString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: Date().toLocaleString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: Date().toLocaleString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: Date().toLocaleString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
        {name: Date().toLocaleString().slice(0, 10), dog1: 350, dog2: 240, dog3: 100},
    ]

    return (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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