import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authenticate } from '../../../store/session';
import { getWalksUser, getWalksByDog } from '../../../store/walks';
import { getDogs, getDogsByWalk } from '../../../store/dogs';
import styles from '../../../css-modules/Graph.module.css';

function Graph() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [showDuration, setShowDuration] = useState(true);

    useEffect(() => {
        // dispatch(authenticate())
        dispatch(getDogs(id))
        dispatch(getWalksUser(id))
    }, [dispatch])

    const user = useSelector(state => state.session.user);
    // console.log('USER FROM STORE-----', user);
    // returns an object (user)

    const dogs = useSelector(state => Object.values(state.dogs));
    // console.log('DOGS FROM STORE-----', dogs);

    const today1 = new Date();
    // dateFormat(todau, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
    // console.log('TODAY1-----------', today1);

    const today2 = new Date();
    today2.setDate(today2.getDate()-1);
    console.log('TODAY2-----------', today2);

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


    function matchingDate(date) {
        const first = date.toString().slice(0, 3)
        const second = date.toString().slice(4, 15)
        return `${first}, ${second} 00:00:00 GMT`
    }
    console.log('USING FUNCTION-------', matchingDate(today2));


    const walks = useSelector(state => Object.values(state.walks));
    console.log('WALKS FROM STORE-----', walks)
        walks.forEach(walk => console.log('WHATS IN THIS WALK??', walk))
    const walksOnDate = walks.filter((walk) => walk.date == matchingDate(today2))
        // walks.date in <ddd, dd MMM yyyy HH':'mm':'ss 'GMT'   =>	Tue, 22 Mar 2016 06:30:07 GMT>
        console.log('WALKS ON DATE---------', walksOnDate)
        // returns an array of objects
    // get walkId
    // find dogs where walk_id == walkId


    const data = [
        {date: today7.toDateString().slice(0, 10)},
        {date: today6.toDateString().slice(0, 10)},
        {date: today5.toDateString().slice(0, 10)},
        {date: today4.toDateString().slice(0, 10)},
        {date: today3.toDateString().slice(0, 10)},
        {date: today2.toDateString().slice(0, 10)},
        {date: today1.toDateString().slice(0, 10), dogDuration1: 350, dogDistance1: 450, dogDuration2: 150, dogDistance2: 350, dogDuration3: 100, dogDistance3: 500},
    ]

    // const getDogWalkByDate = async (dog) => {
    //     const walks = await dispatch(getWalksByDog(dog.id));
    //     // matching date as today1/2/3... filter?
        
    //     return walks
    // }

    // console.log(getDogWalkByDate(dogs['1']));

    // dogs.forEach((dog) => {
    //     // ??? = getDogWalkByDate(dog)

    // })



    // let dogwalks = {};
    // dogs.forEach(dog => {
        // data[`dogDuration${dog.id}`] = dog['dog_total_duration']
        // console.log(data[`dogDuration${dog.id}`]);
        // dogwalks[dog.id] = walks.

        // data[dateKey]
    //     data[0][`dogDuration${dog.id}`] = dog['dog_total_duration']
    //     console.log('HERE-----', dog.id);

    // })

    // for (let dog in dogs) {
    //     data['dogDistance1'] = dog['dog_total_distance']
    //     data['dogDuration1'] = dog['dog_total_duration']
    //     console.log('DOG----------', dog);
    // }




    // 1. get walks by dog ID
        // get all user's dogs (user.id == dogs.user_id)
        // 
    // 2. get dog's walks on specific date
    // 3. insert into data array


    // 1. get all user's dogs in an array
    // const dogs = useSelector(state => Object.values(state.dogs));
    // console.log('DOGS FROM STORE-----', dogs);

    // 2. for each dog, get all its walks (getWalksByDog)
    // let walks;
    // useEffect(() => {
    //     walks = dogs.map(dog => {
    //         dispatch(getWalksByDog(dog.id))
    //     })
    //     // dogs.forEach(dog => {
    //     //     walks = dispatch(getWalksByDog(dog.id))
    //     // })
    // }, [dispatch, dogs])
    // console.log('WALKS--------------------', walks);

    // 3. for each dog, get distance and duration, 
    //    where its date matches date in data array

    // 4. insert into data array


    return (
        <div className={styles.graphBox}>
            <h2>Stats</h2>
            <div className={styles.label}>
                <div>
                    <label>
                        Duration (min.)
                        <input 
                            type='radio' 
                            value='distance' 
                            onChange={() => setShowDuration(true)} checked={showDuration} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Distance (mi.)
                        <input 
                            type='radio' 
                            value='duration' 
                            onChange={() => setShowDuration(false)} checked={!showDuration}
                        />
                    </label>
                </div>
            </div>
            <div className={styles.graph}>
                {showDuration ? (
                    <LineChart 
                        width={700} 
                        height={300} 
                        data={data} 
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
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
                        <XAxis dataKey="date" />
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