const SET_DIST_GRAPH_DATA = 'graph/SET_DIST_GRAPH_DATA';
const SET_DUR_GRAPH_DATA = 'graph/SET_DUR_GRAPH_DATA';

const setDistGraphData = (data) => ({
    type: SET_DIST_GRAPH_DATA,
    payload: data
});

const setDurGraphData = (data) => ({
    type: SET_DUR_GRAPH_DATA,
    payload: data
});

export const createDistGraphData = (data) => async (dispatch) => {
    dispatch(setDistGraphData(data));
};

export const createDurGraphData = (data) => async (dispatch) => {
    dispatch(setDurGraphData(data));
};

const initialState = {}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_DIST_GRAPH_DATA:
            newState = { ...state }
            newState.dist = action.payload
            return newState;
        case SET_DUR_GRAPH_DATA:
            newState = { ...state }
            newState.dur = action.payload
            return newState;
        default:
            return state;
    }
}