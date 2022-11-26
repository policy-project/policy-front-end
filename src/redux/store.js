import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit"
import { policies } from "../common/config";
import {policyStoreReducer} from "./slice"


const reducers = combineReducers({
    policy: policyStoreReducer
})



export default configureStore({
    reducer: reducers, 
    preloadedState: {
        policy: policies
    }
})

export const policySelector = (state) => state.policy;
