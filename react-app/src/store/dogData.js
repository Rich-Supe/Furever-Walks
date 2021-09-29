const SET_DOG_DATA = 'dogData/SET_DOG_DATA';

const setDogData = (data) => ({
    type: SET_DOG_DATA,
    payload: data
});

export const getDogData = (date, walksArray, userId) => async (dispatch) => {
    const key = date
    const totals = {}
    const final = {}
    walksArray.forEach(async (walk) => {
        const response = await fetch(`/api/dogs/all/walks/${walk.id}`)
        if (response.ok) {
            const dogsOnWalk = await response.json();
            dogsOnWalk.dogs.forEach(dog => {
                if (totals[`dog-${dog.id}-dis`]) {
                    totals[`dog-${dog.id}-dis`] += walk.distance
                    totals[`dog-${dog.id}-dur`] += walk.duration
                } else {
                    totals[`dog-${dog.id}-dis`] = walk.distance
                    totals[`dog-${dog.id}-dur`] = walk.duration
                }
            })
        }
    })
    const response = await fetch(`/api/dogs/all/${userId}`)
    if (response.ok) {
        const res = await response.json();
        const dogs = res.dogs
        // console.log(dogs);
        dogs.forEach(dog => {
            console.log(dog);
            if (totals[`dog-${dog.id}-dis`] === undefined) {
                totals[`dog-${dog.id}-dis`] = 0;
            }
            if (totals[`dog-${dog.id}-dur`] === undefined) {
                totals[`dog-${dog.id}-dur`] = 0;
            }
        })
    }
    final[key] = totals
    await dispatch(setDogData(final))
}

const initialState = {}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_DOG_DATA:
            newState = { ...state }
            for (let key in action.payload) {
                if (newState[action.payload[key]]) {
                    for (let key2 in action.payload[key]) {
                        if(!newState[key][action.payload[key][key2]]) {
                            newState[key][action.payload[key][key2]] = action.payload[key][key2]
                        } else {
                            newState[key][action.payload[key][key2]] += action.payload[key][key2]
                        }
                    }
                } else {
                    newState[key] = action.payload[key]
                }
            }
            return newState;
        default:
            return state;
    }
}