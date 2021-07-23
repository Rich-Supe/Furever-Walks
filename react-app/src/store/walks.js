const SET_WALK = 'walks/SET_WALK';
const SET_WALKS_USER = 'walks/SET_WALKS_USER';
const SET_WALKS_DOG = 'walks/SET_WALKS_DOG';
const ADD_WALK = 'walks/ADD_WALK';
const UPDATE_WALK = 'walks/UPDATE_WALK';
const REMOVE_WALK = 'walks/REMOVE_WALK';
const WALKS_BY_DOG = 'walks/WALKS_BY_DOG';

const setWalk = (id) => ({
    type: SET_WALK,
    payload: id
});

const setWalksUser = (walks) => ({
    type: SET_WALKS_USER,
    payload: walks
});

const setWalksDog = (walks) => ({
    type: SET_WALKS_DOG,
    payload: walks
});

const setWalksByDogId = (dogId) => ({
    type: WALKS_BY_DOG,
    payload: dogId
});

const updateWalk = (walk) => ({
    type: UPDATE_WALK,
    payload: walk
});

const addWalk = (walk) => ({
    type: ADD_WALK,
    payload: walk
});

const removeWalk = (walkId) => ({
    type: REMOVE_WALK,
    payload: walkId
});


export const getWalk = (walkId) => async (dispatch) => {
    const response = await fetch(`/api/walks/${walkId}`)
    if (response.ok) {
        const walk = await response.json();
        dispatch(setWalk(walk));
    }
    else {
        return ['An error occurred. Please try again.']
    }
}

export const getWalksUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/walks/all/${userId}`)
    console.log(`Userid from getWalk thunk____not okay`, userId)
    if (response.ok) {
        console.log(`Userid from getWalk thunk____==-=-=--`, userId)
        const walks = await response.json();
        dispatch(setWalksUser(walks.walks));
    }
    else {
        return ['An error occurred. Please try again.']
    }
}

// export const getWalksDog = (dogId) => async (dispatch) => {
//     const response = await fetch(`/api/walks/all/${dogId}`)
//     console.log(`Userid from getWalk thunk____not okay`, dogId)
//     if (response.ok) {
//         console.log(`Userid from getWalk thunk____==-=-=--`, dogId)
//         const walks = await response.json();
//         dispatch(setWalksDog(walks.walks));
//     }
//     else {
//         return ['An error occurred. Please try again.']
//     }
// }

export const addWalkByDog = (dogId, walkId) => async (dispatch) => {
    const response = await fetch(`/api/walks/dogs/${dogId}`)
}

export const getWalksByDog = (dogId) => async (dispatch) => {
    const response = await fetch(`/api/walks/all/dogs/${dogId}`)
    console.log(`Userid from getWalk thunk____not okay`, dogId)
    if (response.ok) {
        console.log(`Userid from getWalk thunk____==-=-=--`, dogId)
        const walks = await response.json();
        dispatch(setWalksByDogId(walks.walks));
    }
    else {
        return ['An error occurred. Please try again.']
    }
}

export const editWalk = (walkId, walk) => async (dispatch) => {
    const response = await fetch(`/api/walks/${walkId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(walk)
    })
    if (response.ok) {
        const walk = await response.json();
        dispatch(updateWalk(walk));
    }
}

export const createWalk = (walk) => async (dispatch) => {
    console.log("walk from createWalk thunk", walk)
    const response = await fetch(`/api/walks/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(walk)
    })
    if (response.ok) {
        const newWalk = await response.json();
        dispatch(addWalk(newWalk));
        return newWalk;
    }
    else {
        return ['An error occurred. Please try again.']
    }
}

export const deleteWalk = (walkId) => async (dispatch) => {
    const response = await fetch(`/api/walks/${walkId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeWalk(walkId));
    }
}

const initialState = {};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_WALK:
            newState = { ...state };
            newState[action.payload] = action.payload;
            return newState;
        case SET_WALKS_USER:
            newState = { ...state };
            action.payload.forEach((walk) => {
                newState[walk.id] = walk;
            });
            return newState;
        case SET_WALKS_DOG:
            newState = { ...state };
            action.payload.forEach((walk) => {
                newState[walk.id] = walk;
            });
            return newState;
        case WALKS_BY_DOG:
            newState = { ...state };
            action.payload.forEach((walk) => {
                newState[walk.id] = walk;
            });
            return newState;
        case UPDATE_WALK:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        case ADD_WALK:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        case REMOVE_WALK:
            newState = { ...state };
            newState.walk = [...state.walk];
            const index = newState.walk.findIndex((walk) => walk.id === action.payload);
            newState.walk.splice(index, 1);
            return newState;
        default:
            return state;
    }
}