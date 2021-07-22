const SET_MODAL = 'modals/SET_MODAL'
const SET_ID = 'modals/SET_ID'

const setModalStatus = (status) => ({
    type: SET_MODAL,
    payload: status
})

const setDogId = (dogId) => ({
    type: SET_ID,
    payload: dogId
})

export const setModal = (status) => async (dispatch) => {
    dispatch(setModalStatus(status))
}

export const setDogModalId = (dogId) => async (dispatch) => {
    dispatch(setDogId(dogId))
}

const initialState = { 'status': false };

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_MODAL:
            newState = { ...state }
            newState['status'] = action.payload
            return newState;
        case SET_ID:
            newState = { ...state }
            newState['dogId'] = action.payload
            return newState
        default:
            return state;
    }
}