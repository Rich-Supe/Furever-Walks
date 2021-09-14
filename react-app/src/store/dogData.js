const SET_DOG_DATA = 'dogData/SET_DOG_DATA';

const setDogData = (data) => ({
    type: SET_DOG_DATA,
    payload: data
});

export const getDogData = (date, walksArray) => async (dispatch) => {
    const key = date
    const totals = {}
    const final = {}
    walksArray.forEach(async (walk) => {
        const response = await fetch(`/api/dogs/all/walks/${walk.id}`)
        if (response.ok) {
            // console.log('21312313', walk)
            const dogsOnWalk = await response.json();
            // console.log('zzzzzzzzzz', dogsOnWalk.dogs)
            dogsOnWalk.dogs.forEach(dog => {
                if (totals[`dog-${dog.id}-dis`]) {
                    totals[`dog-${dog.id}-dis`] += walk.distance
                    totals[`dog-${dog.id}-dur`] += walk.duration
                } else {
                    totals[`dog-${dog.id}-dis`] = walk.distance
                    totals[`dog-${dog.id}-dur`] = walk.duration
                }
            })
            console.log(totals)
        }
    })
    final[key] = totals
    console.log(final)
    await dispatch(setDogData(final))
}

const initialState = {}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_DOG_DATA:
            console.log('action.payload1111', action.payload)
            // console.log(action.payload['Tue Sep 14'])
            newState = { ...state }
            for (let key in action.payload) {
                if (newState[action.payload[key]]) {
                    console.log('zzzzzzzzzzzzz', newState[action.payload[key]])
                    for (let key2 in action.payload[key]) {
                        if(!newState[key][action.payload[key][key2]]) {
                            console.log('4823094023402840328no new')
                            newState[key][action.payload[key][key2]] = action.payload[key][key2]
                        } else {
                            console.log('43248230948230480234283new')
                            newState[key][action.payload[key][key2]] += action.payload[key][key2]
                        }
                    }
                } else {
                    console.log('qqqqqqqqqqqq', action.payload[key])
                    newState[key] = action.payload[key]
                }
            }
            return newState;
        default:
            return state;
    }
}