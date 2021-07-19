const SET_DOG = 'dogs/SET_DOG';
const SET_DOGS = 'dogs/SET_DOGS';
const ADD_DOG = 'dogs/ADD_DOG';
const UPDATE_DOG = 'dogs/UPDATE_DOG';
const REMOVE_DOG = 'dogs/REMOVE_DOG';

const setDog = (id) => ({
    type: SET_DOG,
    payload: id
});

const setDogs = (dogs) => ({
    type: SET_DOG,
    payload: dogs
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
    console.log(`Userid from getDog thunk____not okay`, userId)
    if (response.ok) {
        console.log(`Userid from getDog thunk____==-=-=--`, userId)
        const dogs = await response.json();
        dispatch(setDogs(dogs));
    }
    
    else {
        return ['An error occurred. Please try again.']
    }
}

export const editDog = (dogId, dog) => async (dispatch) => {
    const response = await fetch(`/api/dogs/${dogId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dog)
    })
    if (response.ok) {
        const dog = await response.json();
        dispatch(updateDog(dog));
    }
}

export const createDog = (dog) => async (dispatch) => {
    const response = await fetch(`/api/dogs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dog)
    })
    if (response.ok) {
        const newDog = await response.json();
        dispatch(addDog(newDog));
    }
    else {
        return ['An error occurred. Please try again.']
    }
}

export const deleteDog = (dogId) => async (dispatch) => {
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
            newState[action.payload] = action.payload;
            return newState;
        case SET_DOGS:
            newState = {...state};
            action.payload.forEach((dog) => {
                newState[dog.id] = dog;
            });
            return newState;
        case UPDATE_DOG:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        case ADD_DOG:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        case REMOVE_DOG:  
            newState = {...state};
            newState.dog = [...state.dog];
            const index = newState.dog.findIndex((dog) => dog.id === action.payload);
            newState.dog.splice(index, 1);
            return newState; 
        default:
            console.log('HELLLOOOO from default')
            return state;     
    }   
}              

// newState = { ...state };
//             newState.fullNote = [...state.fullNote];
//             const idxToRemove = newState.fullNote.findIndex(oneFullNote => oneFullNote.id === action.noteId);
//             newState.fullNote.splice(idxToRemove, 1);
//             return newState;
