import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authenticate } from '../../../store/session';
import { getWalksUser, getWalksByDog } from '../../../store/walks';
import { getDogs, getDogsByWalk } from '../../../store/dogs';
import styles from '../../../css-modules/Graph.module.css';
import { getDogData } from '../../../store/dogData'
import { createDistGraphData, createDurGraphData } from '../../../store/graph'

function Graph() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [showDuration, setShowDuration] = useState(true);

    useEffect(async () => {
        await dispatch(getDogs(id))
        await dispatch(getWalksUser(id))
    }, [dispatch])

    const user = useSelector(state => state.session.user);
    // console.log('USER FROM STORE-----', user);
    // returns an object (user)

    const dogs = useSelector(state => (state.dogs));
    const dogsObj = useSelector(state => Object.values(state.dogs));
    // console.log('DOGS FROM STORE-----', dogs);
    // returns an array of object (dogs)


    /* ---------- INSERTING DATA ---------- */

    // 1. get all walks from store
    const walks = useSelector(state => Object.values(state.walks));

    // 2. filter all walks where dates match

    // create dates for 7 days back from today for x-axis label
    const today1 = new Date();
    const today2 = new Date();
    today2.setDate(today2.getDate() - 1);
    const today3 = new Date();
    today3.setDate(today3.getDate() - 2);
    const today4 = new Date();
    today4.setDate(today4.getDate() - 3);
    const today5 = new Date();
    today5.setDate(today5.getDate() - 4);
    const today6 = new Date();
    today6.setDate(today6.getDate() - 5);
    const today7 = new Date();
    today7.setDate(today7.getDate() - 6);

    // function to return date in string format that matches date from backend
    function matchingDate(date) {
        const day = date.toString().slice(0, 3)
        const month = date.toString().slice(4, 7)
        const dd = date.toString().slice(8, 10)
        const yyyy = date.toString().slice(11, 15)
        return `${day}, ${dd} ${month} ${yyyy} 00:00:00 GMT`
    }

    // get walks on each date
    const walksOnDay1 = walks.filter((walk) => walk.date == matchingDate(today1))
    const walksOnDay2 = walks.filter((walk) => walk.date == matchingDate(today2))
    const walksOnDay3 = walks.filter((walk) => walk.date == matchingDate(today3))
    const walksOnDay4 = walks.filter((walk) => walk.date == matchingDate(today4))
    const walksOnDay5 = walks.filter((walk) => walk.date == matchingDate(today5))
    const walksOnDay6 = walks.filter((walk) => walk.date == matchingDate(today6))
    const walksOnDay7 = walks.filter((walk) => walk.date == matchingDate(today7))
    // returns an array of walk objects
    // console.log('day 2', walksOnDay2);
    // dispatch(getDogData(walksOnDay2))

    const update = () => {
        // dispatch(getDogData(today1.toDateString().slice(0, 10), walksOnDay1))
        // dispatch(getDogData(today2.toDateString().slice(0, 10), walksOnDay2))
        // dispatch(getDogData(today3.toDateString().slice(0, 10), walksOnDay3))
        // dispatch(getDogData(today4.toDateString().slice(0, 10), walksOnDay4))
        // dispatch(getDogData(today5.toDateString().slice(0, 10), walksOnDay5))
        // dispatch(getDogData(today6.toDateString().slice(0, 10), walksOnDay6))
        dispatch(getDogData(today7.toDateString().slice(0, 10), walksOnDay7))
        dispatch(getDogData(today6.toDateString().slice(0, 10), walksOnDay6))
        dispatch(getDogData(today5.toDateString().slice(0, 10), walksOnDay5))
        dispatch(getDogData(today4.toDateString().slice(0, 10), walksOnDay4))
        dispatch(getDogData(today3.toDateString().slice(0, 10), walksOnDay3))
        dispatch(getDogData(today2.toDateString().slice(0, 10), walksOnDay2))
        dispatch(getDogData(today1.toDateString().slice(0, 10), walksOnDay1))
    }

    const dogData = useSelector(state => state.dogData);

    const data = [
        { date: today7.toDateString().slice(0, 10), Marley1: 35, Marley2: 0.5, Luna1: 15, Luna2: 1.0, Milo1: 12, Milo2: 0.7, Warren1: 24, Warren2: 0.3, Mitchell1: 23, Mitchell2: 0.2, Leah1: 13, Leah2: 0.3 },
        { date: today6.toDateString().slice(0, 10), Marley1: 30, Marley2: 0.4, Luna1: 30, Luna2: 0.2, Milo1: 16, Milo2: 0.4, Warren1: 46, Warren2: 1.0, Mitchell1: 45, Mitchell2: 0.5, Leah1: 19, Leah2: 0.1 },
        { date: today5.toDateString().slice(0, 10), Marley1: 20, Marley2: 0.7, Luna1: 40, Luna2: 0.5, Milo1: 34, Milo2: 1.0, Warren1: 34, Warren2: 0.4, Mitchell1: 45, Mitchell2: 0.5, Leah1: 45, Leah2: 0.5 },
        { date: today4.toDateString().slice(0, 10), Marley1: 60, Marley2: 0.2, Luna1: 20, Luna2: 0.1, Milo1: 57, Milo2: 0.2, Warren1: 23, Warren2: 0.2, Mitchell1: 23, Mitchell2: 0.2, Leah1: 23, Leah2: 0.2 },
        { date: today3.toDateString().slice(0, 10), Marley1: 30, Marley2: 0.3, Luna1: 16, Luna2: 0.1, Milo1: 34, Milo2: 0.1, Warren1: 67, Warren2: 1.2, Mitchell1: 12, Mitchell2: 0.1, Leah1: 35, Leah2: 0.3 },
        { date: today2.toDateString().slice(0, 10), Marley1: 35, Marley2: 0.5, Luna1: 35, Luna2: 0.4, Milo1: 13, Milo2: 0.8, Warren1: 23, Warren2: 0.3, Mitchell1: 34, Mitchell2: 0.4, Leah1: 36, Leah2: 0.4 },
        { date: today1.toDateString().slice(0, 10), Marley1: 50, Marley2: 0.6, Luna1: 15, Luna2: 0.3, Milo1: 35, Milo2: 0.4, Warren1: 12, Warren2: 0.1, Mitchell1: 13, Mitchell2: 0.1, Leah1: 57, Leah2: 0.5 },
    ]

    const distData = [];
    const durData = [];
    const updatedDistData = useSelector(state => state.graph.dist)
    const updatedDurData = useSelector(state => state.graph.dur)

    const loadData = () => {
        for (let date in dogData) {
            console.log(date)
            const distObj = {}
            const durObj = {}
            distObj['date'] = date
            durObj['date'] = date
            for (let data in dogData[date]) {
                console.log('daaaaa', dogData[date][data])
                if (data.includes('dis')) {
                    const dogId = data.slice(4, 5)
                    const dogName = dogs[dogId].name
                    distObj[dogName] = dogData[date][data]
                }
                if (data.includes('dur')) {
                    const dogId = data.slice(4, 5)
                    const dogName = dogs[dogId].name
                    durObj[dogName] = dogData[date][data]
                }
            }
            distData.push(distObj)
            durData.push(durObj)
        }
        // console.log(distData)
        // console.log(data)
        dispatch(createDistGraphData(distData))
        dispatch(createDurGraphData(durData))
    }
    // if (data1) {
    //     console.log('zzsdfads')
    //     console.log(Object.values(data1))
    //     for (let key in data1) {
    //         console.log('keyjsdfklafs')
    //         if (key.includes('dis')) {
    //             distData.push({ date: today1.toDateString().slice(0, 10), [key]: data1[key] })
    //         }
    //     }
    // }
    // console.log('112', distData)

    // walks data by both user and dogs
    // const data = [
    //     {date: today7.toDateString().slice(0, 10), userDuration: walksOnDay7[0]?.duration, userDistance: walksOnDay7[0]?.distance},
    //     {date: today6.toDateString().slice(0, 10), userDuration: walksOnDay6[0]?.duration, userDistance: walksOnDay6[0]?.distance},
    //     {date: today5.toDateString().slice(0, 10), userDuration: walksOnDay5[0]?.duration, userDistance: walksOnDay5[0]?.distance},
    //     {date: today4.toDateString().slice(0, 10), userDuration: walksOnDay4[0]?.duration, userDistance: walksOnDay4[0]?.distance},
    //     {date: today3.toDateString().slice(0, 10), userDuration: walksOnDay3[0]?.duration, userDistance: walksOnDay3[0]?.distance},
    //     {date: today2.toDateString().slice(0, 10), userDuration: walksOnDay2[0]?.duration, userDistance: walksOnDay2[0]?.distance},
    //     {date: today1.toDateString().slice(0, 10), userDuration: walksOnDay1[0]?.duration, userDistance: walksOnDay1[0]?.distance},
    // ]

    // 3. for each walk, get walk.duration/distance where getDogByWalk(walk.id)
    // FROM HERE: go back and build backend routes and thunk actions to handle this

    // use variables: 
    // dogs (array of dog objects)
    // walksOnDay1/2/3/4/5/6/7 (array of walk objects)

    // if (walksOnDay1.length) {
    //     for (let walk in walksOnDay1) {
    //         (async() => {
    //             let doggos = await dispatch(getDogsByWalk(walk.id))
    //             console.log('WHAT IS IN DOGGOS--------', doggos);
    //         })();
    //     }
    // }

    // 4. push into data
    // for (let dog in dogs) {
    //     data['date'] = matchingDate(today1.toDateString().slice(0, 10))
    //     data['dogDistance1'] = dog['dog_total_distance']
    //     data['dogDuration1'] = dog['dog_total_duration']
    //     console.log('DOG----------', dog);
    // }

    return (
        <div className={styles.graphBox}>
            <h1>WEEKLY STATS</h1>
            <div className={styles.label}>
                <div>
                    <label>
                        DURATION (mins)
                        <input
                            type='radio'
                            value='distance'
                            onChange={() => setShowDuration(true)} checked={showDuration}
                        />
                        <button onClick={update}>update</button>
                        <button onClick={loadData}>load</button>
                    </label>
                </div>
                <div>
                    <label>
                        DISTANCE (mi)
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
                        width={1000}
                        height={300}
                        data={updatedDurData}
                        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
                    >
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend verticalAlign="top"
                            layout="vertical"
                            align="left"
                            wrapperStyle={{
                            paddingLeft: "10px",
                            paddingTop: "10px"
                        }}/> */}

                        {dogsObj.map(dog => {
                            { console.log('pppp0p0p0p0p0p0p0p0', dog.name) }
                            return <Line type="monotone" dataKey={`${dog.name}`} stroke={'#'+Math.floor(Math.random()*16777215).toString(16)} key={dog.id} />
                        })
                        }

                        {/* <Line type="monotone" dataKey="Marley1" stroke="#ffc911" />
                        <Line type="monotone" dataKey="Luna1" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Milo1" stroke="#e2543c" />
                        <Line type="monotone" dataKey="Warren1" stroke="#85602f" />
                        <Line type="monotone" dataKey="Mitchell1" stroke="#959789" />
                        <Line type="monotone" dataKey="Leah1" stroke="#1e360a" /> */}
                    </LineChart>
                ) : (
                    <LineChart
                        width={950}
                        height={300}
                        data={updatedDistData}
                        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
                    >
                        {console.log('zzzzz', distData)}
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend verticalAlign="top"
                            layout="vertical"
                            align="left"
                            wrapperStyle={{
                            paddingLeft: "10px",
                            paddingTop: "10px"
                        }}/> */}
                        {dogsObj.map(dog => {
                            { console.log('pppp0p0p0p0p0p0p0p0', dog.name) }
                            return <Line type="monotone" dataKey={`${dog.name}`} stroke={'#'+Math.floor(Math.random()*16777215).toString(16)} key={dog.id} />
                        })
                        }
                        {/* <Line type="monotone" dataKey="Marley2" stroke="#ffc911" />
                        <Line type="monotone" dataKey="Luna2" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Milo2" stroke="#e2543c" />
                        <Line type="monotone" dataKey="Warren2" stroke="#85602f" />
                        <Line type="monotone" dataKey="Mitchell2" stroke="#959789" />
                        <Line type="monotone" dataKey="Leah2" stroke="#1e360a" /> */}
                    </LineChart>
                )}
            </div>
        </div>
    )
}

export default Graph;