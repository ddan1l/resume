import {SET_PROCESSING} from "./types";

const initialState = {
    processing: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PROCESSING:
            return {
                ...state, processing: action.payload
        }
        default: return state
    }
}