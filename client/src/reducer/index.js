import { 
    GET_SONG,
    GET_SONG_BY_ID
    } from "../actions/index"

const initialState = {
    song : {},
    songDetail : {},
    allSongs : [],
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_SONG :
            return {
                ...state,
                song : payload.results,
            }
        case GET_SONG_BY_ID :
            return {
                ...state,
                songDetail : payload.results,
            }
        default: return state;
    }
}

export default rootReducer;