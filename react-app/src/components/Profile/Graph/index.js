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
    const dogData = useSelector(state => state.dogData);
    const updatedDistData = useSelector(state => state.graph.dist)
    const updatedDurData = useSelector(state => state.graph.dur)
    const [displayGraph, setDisplayGraph] = useState(false);

    useEffect(async () => {
        await dispatch(getDogs(id))
        await dispatch(getWalksUser(id))
    }, [dispatch])

    const dogs = useSelector(state => (state.dogs));
    const dogsObj = useSelector(state => Object.values(state.dogs));


    /* ---------- INSERTING DATA ---------- */

    // 1. get all walks from store
    const walkObj = useSelector(state => state.walks)
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

    const update = async () => {
        await dispatch(getDogData(today7.toDateString().slice(0, 10), walksOnDay7, id))
        await dispatch(getDogData(today6.toDateString().slice(0, 10), walksOnDay6, id))
        await dispatch(getDogData(today5.toDateString().slice(0, 10), walksOnDay5, id))
        await dispatch(getDogData(today4.toDateString().slice(0, 10), walksOnDay4, id))
        await dispatch(getDogData(today3.toDateString().slice(0, 10), walksOnDay3, id))
        await dispatch(getDogData(today2.toDateString().slice(0, 10), walksOnDay2, id))
        await dispatch(getDogData(today1.toDateString().slice(0, 10), walksOnDay1, id))
        // console.log('updated')
    }

    const loadData = async () => {
        const distData = [];
        const durData = [];
        // console.log('loaded')
        // console.log('dogdata', dogData)
        for (let date in dogData) {
            // console.log('date exists')
            // console.log('date', date)
            const distObj = {}
            const durObj = {}
            distObj['date'] = date
            durObj['date'] = date
            for (let data in dogData[date]) {
                // console.log('data exists')
                if (data.includes('dis')) {
                    // console.log('distances')
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
        await dispatch(createDistGraphData(distData))
        await dispatch(createDurGraphData(durData))
    }

    useEffect(() => {
        update()
    }, [walkObj])

    useEffect(() => {
        loadData()
    }, [dogData])

    const loadDistGraph = () => {
        loadData()
        setShowDuration(false)
        setDisplayGraph(true)
    }

    const loadDurGraph = () => {
        loadData()
        setShowDuration(true)
        setDisplayGraph(true)
    }

    return (
        <div className={styles.graphBox}>
            <h1>WEEKLY STATS</h1>
            <div className={styles.label}>
                {/* <button onClick={() => loadDistGraph()}>load dist</button>
                <button onClick={() => loadDurGraph()}>load dur</button>
                <button class="coolBeans" onClick={() => loadDistGraph()}>load dist</button>
                <button class="btn btn--action" onClick={() => loadDurGraph()}>load dur</button> */}
                {/* <a href="#" class="coolBeans">Distance</a> */}
                <div className={styles.flexCenter}>
                    <button className={styles.btnflip} data-back="👣" data-front="Distance" onClick={() => loadDistGraph()}></button>
                    <button className={styles.btnflip} data-back="🕒" data-front="Duration" onClick={() => loadDurGraph()}></button>
                </div>
                {/* <div>
                    <label>
                        DURATION (mins)
                        <input
                            type='radio'
                            value='distance'
                            onChange={() => setShowDuration(true)} checked={showDuration}
                        />
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
                </div> */}
            </div>
            <div className={styles.graph}>
                {showDuration && displayGraph &&
                    <LineChart
                        width={1000}
                        height={300}
                        data={updatedDurData}
                        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
                        className={styles.durationGraph}
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
                            console.log('dog from line mapping', dog)
                            return <Line type="monotone" dataKey={`${dog.name}`} stroke={'#' + Math.floor(Math.random() * 16777215).toString(16)} key={dog.id} />
                        })
                        }
                    </LineChart>
                }
                {!showDuration && displayGraph &&
                    <LineChart
                        width={1000}
                        height={300}
                        data={updatedDistData}
                        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
                        className={styles.distanceGraph}
                    >
                        {/* {console.log('zzzzz', distData)} */}
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
                            return <Line type="monotone" dataKey={`${dog.name}`} stroke={'#' + Math.floor(Math.random() * 16777215).toString(16)} key={dog.id} />
                        })
                        }
                    </LineChart>
                }
            </div>
        </div>
    )
}

export default Graph;