import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import styles from '../../../css-modules/Graph.module.css';

function Graph() {
    const user = useSelector(state => state.session.user);
    const dog = useSelector(state => state.dogs);
    console.log('USER-----------------', user);
    console.log('DOG-----------------', dog);
    console.log('DATE', Date().toLocaleString().slice(0, 10));

    const data = [
        {name: Date().toLocaleString().slice(0, 10), user: 300, dog1: 2400, dog2: 240, amt: 2400},
        {name: Date().toLocaleString().slice(0, 10), user: 100, dog1: 2400, dog2: 240, amt: 2400},
        {name: Date().toLocaleString().slice(0, 10), user: 200, dog1: 2400, dog2: 240, amt: 2400},
        {name: Date().toLocaleString().slice(0, 10), user: 250, dog1: 2400, dog2: 240, amt: 2400},
        {name: Date().toLocaleString().slice(0, 10), user: 400, dog1: 2400, dog2: 240, amt: 2400},
        {name: Date().toLocaleString().slice(0, 10), user: 250, dog1: 2400, dog2: 240, amt: 2400},
        {name: Date().toLocaleString().slice(0, 10), user: 400, dog1: 2400, dog2: 240, amt: 2400},
    ];

    return (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="user" stroke="#82ca9d" />
            <Line type="monotone" dataKey="dog1" stroke="#8884d8" />
            <Line type="monotone" dataKey="dog2" stroke="#8884d1" />
        </LineChart>
    )
}

export default Graph;