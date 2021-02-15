import {GET_DATA, SET_PROCESSING} from "./types";

export function setProcessing(payload){
    return {
        type: SET_PROCESSING,
        payload: payload
    }
}
export function getData(){
    return async  dispatch => {
        dispatch(setProcessing(true))
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const response = await fetch("https://my-json-server.typicode.com/ddan1l/api/db", requestOptions);
        const json =  await response.json()
        setTimeout(()=>{
            dispatch({
                type: GET_DATA,
                payload: json
            })
            dispatch(setProcessing(false))
        }, 500)
    }
}