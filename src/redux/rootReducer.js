import {combineReducers} from "redux";
import {profileReducer} from "./profileResucer";
import {appReducer} from "./appReducer"

export const rootReducer = combineReducers({
    profile: profileReducer,
    app: appReducer
})