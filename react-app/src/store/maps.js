// const LOAD_API_KEY = 'maps/LOAD_API_KEY';

// const loadApiKey = (key) => ({
//   type: LOAD_API_KEY,
//   payload: key,
// });

// export const getKey = () => async (dispatch) => {
//   const res = await fetch('/api/maps/key');
//   console.log("KEYYY from thunk:", res)
//   const data = await res.json();
//   console.log("KEYYY from thunk2:", res)
//   dispatch(loadApiKey(data.googleMapsAPIKey));
// };

// const initialState = { key: null };

// const mapsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOAD_API_KEY:
//       return { key: action.payload };
//     default:
//       return state;
//   }
// };

// const SET_MAP_STATS = 'maps/SET_MAP_STATS';

// const setMapStats = (stats) => ({
//     type: SET_MAP_STATS,
//     payload: stats,
// });

// export const getMapStats = (stats) => async (dispatch) => {
//     dispatch(setMapStats(stats));
// }

// export default function reducer(state = {}, action) {
//     switch (action.type) {
//         case SET_MAP_STATS:
//             // return { ...state, ...action.payload };
//             const newState = { ...state }
//             newState["stats"] = action.payload;
//             return newState;

//         default:
//             return state;
//     }
// }
