import { legacy_createStore as createStore, applyMiddleware,combineReducers} from "redux";

import{Reducer} from "./Reducer"


const middleware=(store)=>(next)=>(action)=>{
    if(typeof(action)=="function")
    {
        return action(store.dispatch)
    }
    return next(action)
}

export const Store=createStore(Reducer,applyMiddleware(middleware))
