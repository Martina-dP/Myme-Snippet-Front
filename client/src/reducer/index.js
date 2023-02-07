import { 
    GET_SONG
    } from "../actions/index"

const initialState = {
    song : {},
    allSongs : [],
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_SONG :
            return {
                ...state,
                song : payload.results,
            }
        default: return state;
    }
}

export default rootReducer;