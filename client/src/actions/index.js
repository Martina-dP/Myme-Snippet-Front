import axios from "axios";
;
export const GET_SONG = "GET_SONG";

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