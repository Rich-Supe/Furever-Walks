const SET_DOG = 'dogs/SET_DOG';
const SET_DOGS = 'dogs/SET_DOGS';
const ADD_DOG = 'dogs/ADD_DOG';
const UPDATE_DOG = 'dogs/UPDATE_DOG';
const REMOVE_DOG = 'dogs/REMOVE_DOG';
const DOGS_BY_WALK = 'dogs/DOGS_BY_WALK';
const IS_SELECTED = 'dog/IS_SELECTED';

const setDog = (id) => ({
    type: SET_DOG,
    payload: id
});

const setDogs = (dogs) => ({
    type: SET_DOG,
    payload: dogs
});

const setDogsByWalkId = (walkId) => ({
    type: DOGS_BY_WALK,
    payload: walkId
});

const updateDog = (dog) => ({
    type: UPDATE_DOG,
    payload: dog
});

const addDog = (dog) => ({
    type: ADD_DOG,
    payload: dog
});

const removeDog = (dogId) => ({
    type: REMOVE_DOG,
    payload: dogId
});

const selectDog = (dogId, checkStatus) => ({
    type: IS_SELECTED,
    payload: {
        dogId,
        checkStatus
    }
})

export const isDogSelected = (dogId, checkStatus) => async (dispatch) => {
    dispatch(selectDog(dogId, checkStatus))
}

export const getDog = (dogId) => async (dispatch) => {
    const response = await fetch(`/api/dogs/${dogId}`)
    if (response.ok) {
        const dog = await response.json();
        dispatch(setDog(dog));
    }
    else {
        return ['An error occurred. Please try again.']
    }
}

export const getDogs = (userId) => async (dispatch) => {
    const response = await fetch(`/api/dogs/all/${userId}`)
    if (response.ok) {
        const dogs = await response.json();
        await dispatch(setDogs(dogs.dogs));
    }   
    else {
        return ['An error occurred. Please try again.']
    }
}

export const getDogsByWalk = (walkId) => async (dispatch) => {
    const response = await fetch(`/api/dogs/all/walks/${walkId}`)
    if (response.ok) {
        const dogs = await response.json();
        dispatch(setDogsByWalkId(dogs.dogs));
    }
    else {
        return ['An error occurred. Please try again.']
    }
}

export const editDog = (payload) => async (dispatch) => {
    const dogId = payload.dogId;
    const userId = payload.id;
    const response = await fetch(`/api/dogs/${dogId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        dispatch(getDogs(userId))
    }
}

export const createDog = (name, breed, age, image_url, user_id, dog_total_distance, dog_total_duration, dog_total_walks) => async (dispatch) => {
    const response = await fetch('/api/dogs/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            breed,
            age,
            image_url,
            user_id,
            dog_total_distance,
            dog_total_duration,
            dog_total_walks
        })
    });
    if (response.ok) {
        dispatch(getDogs(user_id))
        // return response;
    }
    else {
        return ['An error occurred. Please try again.']
    }
}

export const deleteDog = (dogId, id) => async (dispatch) => {
    const userId = id
    const response = await fetch(`/api/dogs/${dogId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeDog(dogId));
    }
}
    
const initialState = {};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_DOG:
            newState = {...state};
            action.payload.forEach((dog) => {
                newState[dog.id] = dog;
            });
            // newState[action.payload] = action.payload;
            return newState;
        case SET_DOGS:
            newState = {...state};
            action.payload.forEach((dog) => {
                newState[dog.id] = dog;
            });
            return newState;
        case DOGS_BY_WALK:
            newState = { ...state };
            action.payload.forEach((dog) => {
                newState[dog.id] = dog;
            });
            return newState;
        // case UPDATE_DOG:
        //     newState = {...state};
        //     newState[action.payload.id] = action.payload;
        //     return newState;
        // case ADD_DOG:
        //     newState = {...state};
        //     newState[action.payload.id] = action.payload;
        //     return newState;
        case REMOVE_DOG:  
            newState = {...state};
            // newState.dog = [...state.dog];
            // const index = newState.dog.findIndex((dog) => dog.id === action.payload);
            // newState.dog.splice(index, 1);
            delete newState[action.payload]
            return newState; 
        case IS_SELECTED:
            newState = { ...state };
            newState[action.payload.dogId]['status'] = action.payload.checkStatus
            return newState;
        default:
            return state;     
    }   
}              

// newState = { ...state };
//             newState.fullNote = [...state.fullNote];
//             const idxToRemove = newState.fullNote.findIndex(oneFullNote => oneFullNote.id === action.noteId);
//             newState.fullNote.splice(idxToRemove, 1);
//             return newState;
