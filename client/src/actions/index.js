import axios from "axios";

export const GET_SONG = "GET_SONG";
export const GET_SONG_BY_ID = "GET_SONG_BY_ID";

const basicURL = 'https://itunes.apple.com'

export function getSong(query) {
    return async function(dispatch){
        var json = await axios.get(`${basicURL}/search?term=${query}&entity=song&limit=50`)
        return dispatch({
            type : "GET_SONG",
            payload : json.data
        })
    }
}

export function getSongByID(trackId) {
    return async function(dispatch){
        var json = await axios.get(`${basicURL}/lookup?id=${trackId}`)
        return dispatch({
            type : "GET_SONG_BY_ID",
            payload : json.data
        })
    }
}
